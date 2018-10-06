const db = require('../db/knex.js')

class UserModel {

  static create(data) {
    return db('users').insert(data)
  }

  static getAll(){
    return db('users')
  }

  static async getOne(userId){
    const user = await db('users').where({id: userId}).first()
    const albums = await db('albums')
                          .join('user_album', 'albums.id', 'user_album.album_id')
                          .where({user_id: userId})
    user.albums = albums
    return user
  }

  static updateUser(userData){
    const {id} = userData
    return db('users').where({id}).update(userData)
  }

}

module.exports = UserModel