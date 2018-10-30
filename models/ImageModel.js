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
    console.log('data', data)
    const { albumId, sortPosition, ...dataWithoutAlbum } = data
    console.log('data', dataWithoutAlbum)
    try {
      const updatedImageDataAsArray = await db('images').where({ id: data.id }).update(dataWithoutAlbum).returning('*')
      const [imageDataObject] = updatedImageDataAsArray
      console.log('imageDATA OBJ', imageDataObject)
      if(albumId){
        const joinData = await this.createOrUpdateImageAlbumData({...imageDataObject, albumId, sortPosition})
        return {...imageDataObject, albumId: joinData }
      } else {
        return imageDataObject
      }

    } catch(err){
      return {message: err.message, status: 400}
    }
   
   
  }

  static async destroyImage(id) {
    try {
      await this.removeImageAlbumRelations(id)
      const result = await db('images').where({id}).del()
      return result ? {id} : {error: 'something went wrong'} 
    } catch (err){
      return {message: err.message, status: 400}
    }
  }

  static async removeImageAlbumRelations(id){
    try {
      const result = await db('album_image').where({image_id: id}).del()
      return result
    } catch(err){
      return {message: err.message, status: 400}
    }
  }

  static async createOrUpdateImageAlbumData(imageData) {
    console.log('----createOrUpdate', imageData)
    const joinData = await db('album_image').where({image_id: imageData.id})
    const { id, albumId, sortPosition } = imageData
    if(joinData.length){
      return await db('album_image')
                      .where({image_id: id})
                      .update({ image_id: id, album_id: albumId, sortPosition: sortPosition || id })
    } else {
      return await db('album_image').insert({ image_id: imageData.id, album_id: albumId, sortPosition })
    }
  }

}

module.exports = ImageModel