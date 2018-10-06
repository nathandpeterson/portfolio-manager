const db = require('../db/knex.js')

class ImageModel {

  static create(data){
    return db('images').insert(data)
  }

  static getAll() {
    return db('images')
  }

  static getOne(id) {
    return db('images').where({id}).first()
  }

  static updateImageData(imageData) {
    const {id} = imageData
    return db('images').where({id}).update(imageData)
  }

  static deleteImageData(id) {
    return db('images').where({id}).del()
  }

}

module.exports = ImageModel