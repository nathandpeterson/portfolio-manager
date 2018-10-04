const db = require('knex')

class AlbumModel {

  static create = (data) => {
    return db('albums').insert(data)
  }

  static getAll = () => {
    return db('albums')
  }

  static getOne = (id) => {
    return db('albums').where({id}).first()
      .then()
  }

  static updateAlbumData = (albumData) => {
    const {id} = albumData
    return db('albums').where({id}).update(albumData)
  }

  static deleteAlbumData = (id) => {
    return db('albums').where({id}).del()
  }

}

module.exports = AlbumModel