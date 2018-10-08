const db = require('../db/knex.js')

class AlbumModel {

  static create(data) {
    return db('albums').insert(data)
  }

  static getAll() {
    return db('albums')
  }

  static async getOne(albumId) {
    const album = await db('albums').where({id : albumId}).first()
    const images = await db('images')
                            .join('album_image', 'images.id', 'album_image.image_id')
                            .where({album_id: albumId})
    album.images = images
    return album
  }

  static updateAlbumData(albumData) {
    const {id} = albumData
    return db('albums').where({id}).update(albumData)
  }

  static deleteAlbumData(id) {
    return db('albums').where({id}).del()
  }

}

module.exports = AlbumModel