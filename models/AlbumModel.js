const db = require('../db/knex.js')

class AlbumModel {

  static createAlbum(data) {
    try {
      const result = db('albums').insert(data).returning('*')
      return result
    } catch(err){
      return {message: err.message, status: 400}
    }
  }

  static getAll() {
    try {
      return db('albums').returning('*')
        .then((albums) => {
          const promises = albums.map(album =>  this.getOne(album.id))
          return Promise.all(promises)
        })
      
    } catch(err){
      return {message: err.message, status: 400}
    }
  }

  static async getOne(albumId) {
    try {
      const album = await db('albums').where({id : albumId}).first()
      const images = await db('images')
                              .join('album_image', 'images.id', 'album_image.image_id')
                              .where({album_id: albumId})
      album.images = images
      return album
    } catch(err){
      return {message: err.message, status: 400}
    }
    
  }

  static async updateAlbum(albumData) {
    const {id} = albumData
    try {
      const [result] = await db('albums').where({id}).update({...albumData, updated_at: new Date()}).returning('*')
      const images = await db('images')
                              .join('album_image', 'images.id', 'album_image.image_id')
                              .where({album_id: id})
      result.images = images
      return result
    } catch(err){
      return {message: err.message, status: 400}
    }
    
  }

  static destroyAlbum(id) {
    try {
      return db('albums').where({id}).del()
    } catch(err){
      return {message: err.message, status: 400}
    }
   
  }

}

module.exports = AlbumModel