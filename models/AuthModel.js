const db = require('../db/knex.js')
const UserModel = require('./UserModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.SECRET_PW || 'secret'

class AuthModel {

  static async login({email, password}){
    const user = await UserModel.getOne(email)
    if(user.status === 400) return user
    try {
      if(user.hashed_password === "password" && password === "password") {
        const token = this.sign(user)
        return {status: 200, token, message: 'Time to change your password'}
      }
      const token = await this.verifyPassword(password, user) 
        if(token.token) {
        return {status: 200, message: 'Success', token}
      } else return token
    } catch(error){
      return { message: 'Wrong password catch', error, status: 401 }
    }   
  }
  static async verifyPassword(passwordAttempt, userData){
    return bcrypt.compare(passwordAttempt, userData.hashed_password)
      .then(verification => {
        if(verification === true) {
          return this.sign(userData)
        } else {
          return {status: 401, message: 'incorrect password'}
        }
      })
      .catch(() => {
        return {message: 'incorrect password', status:401}
    })
  }

  static sign(data){
    const sub = {id: data.id, firstname: data.first_name}
    const expiresIn = `30 days`
    let newToken = `Bearer ` + jwt.sign({sub}, secret, {expiresIn})
    return {userInfo: sub, token: newToken}
  }
}

module.exports = AuthModel