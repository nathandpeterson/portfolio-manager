const ImageModel = require('../models/ImageModel')


class ImageController {

  static async getAllImages(req, res, next){
    const result = await ImageModel.getAll()
    return res.status(result.status || 200).json(result)
  }

  static async createImage(req, res, next){
    const result = await ImageModel.create(req.body)
    return res.status(result.status || 200).json(result)
  }

  static async updateImage(req, res, next){
    const result = await ImageModel.updateImage({...req.body, id: req.params.id})
    return res.status(result.status || 200).json(result)
  }

  static async destroyImage(req, res, next){
    const result = await ImageModel.destroyImage(req.params.id)
    return res.status(result.status || 200).json(result)
  }

}

module.exports = ImageController