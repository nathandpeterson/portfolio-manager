const db = require('../db/knex.js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const secret = process.env.SECRET_PW || 'secret'

class AuthModel {

  static async login({email, password}){
    try {
      const user = await db('users').where({email}).first()
      if(user.hashed_password === "password" && password === "password") {
        return {status: 200, message: 'Time to change your password'}
      }
      const token = await this.verifyPassword(password, user) 
        if(token) {
        return {status: 200, message: 'Success', token}
      } 
    } catch(error){
      return { message: 'Wrong password catch', error, status: 400 }
    }   
  }
  static async verifyPassword(passwordAttempt, userData){
    return bcrypt.compare(data.password, userData.hashed_password)
      .then(verification => {
        if(verification === true) {
          return this.sign(userData)
        } else {
          return {message: 'incorrect password else', status:400}
        }
      })
      .catch(() => {
        return {message: 'incorrect password', status:400}
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