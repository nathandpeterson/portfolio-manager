const db = require('knex')

class UserModel {

  static create = (data) => {
    return db('users').insert(data)
  }

  static getAll = () => {
    return db('users')
  }

  static getOne = (id) => {
    return db('users').where({id}).first()
  }

  static updateUser = (userData) => {
    const {id} = userData
    return db('users').where({id}).update(userData)
  }

}

module.exports = UserModel