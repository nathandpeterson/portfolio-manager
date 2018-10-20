const db = require('../db/knex.js')

class ImageModel {

  static getAll() {
    return db('images')
  }

  static getOne(id) {
    return db('images').where({id}).first()
  }

  static async create(data){
    const { albumId, ...dataWithoutAlbum } = data
    const imageDataAsArray = await db('images').insert(dataWithoutAlbum).returning('*')
    const [imageData] = imageDataAsArray
    if(albumId){
      const joinData = await this.createOrUpdateImageAlbumData({...imageData, albumId})
      return {imageData, joinData}
    } else {
      return imageData
    }
  }

  static async updateImage(data) {
    console.log('incoming data', data)
    const { albumId, ...dataWithoutAlbum } = data
    const updatedImageDataAsArray = await db('images').where({ id: data.id }).update(dataWithoutAlbum).returning('*')
    console.log('updated image Object -- expecting array', updatedImageDataAsArray)
    const [imageDataObject] = updatedImageDataAsArray
    if(albumId){
      const joinData = await this.createOrUpdateImageAlbumData({...imageDataObject, albumId})
      return {imageDataObject, joinData}
    } else {
      return imageDataObject
    }
  }

  static deleteImageData(id) {
    return db('images').where({id}).del()
  }

  static async createOrUpdateImageAlbumData(imageData) {
    const joinData = await db('album_image').where({image_id: imageData.id})
    console.log('joinDAta,', joinData)
    if(joinData.length){
      return await db('album_image').update({ image_id: imageData.id, album_id: imageData.albumId })
    } else {
      return await db('album_image').insert({ image_id: imageData.id, album_id: imageData.albumId })
    }
  }

}

module.exports = ImageModel