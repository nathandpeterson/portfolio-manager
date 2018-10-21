const db = require('../db/knex.js')

class AlbumModel {

  static createAlbum(data) {
    try {
      const result = db('albums').insert(data).returning('*')
      console.log('result', result)
      return result
    } catch(err){
      console.log('err', err)
      return {message: err.message, status: 400}
    }
  }

  static getAll() {
    return db('albums').returning('*')
  }

  static async getOne(albumId) {
    const album = await db('albums').where({id : albumId}).first()
    const images = await db('images')
                            .join('album_image', 'images.id', 'album_image.image_id')
                            .where({album_id: albumId})
    album.images = images
    return album
  }

  static async updateAlbum(albumData) {
    const {id} = albumData
    try {
      const [result] = await db('albums').where({id}).update(albumData).returning('*')
      return result
    } catch(err){
      return {message: err.message, status: 400}
    }
    
  }

  static destroyAlbum(id) {
    return db('albums').where({id}).del()
  }

}

module.exports = AlbumModel