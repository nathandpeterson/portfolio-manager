const AlbumModel = require('../models/AlbumModel')

class AlbumController {
  static async getAlbums(req, res, next){
    const result = await AlbumModel.getAll()
    return res.status(result.status || 200).json(result)
  }

  static async getAlbum(req, res, next){
    const result = await AlbumModel.getOne(req.params.id)
    return res.status(result.status || 200).json(result)
  }

  static async createAlbum(req, res, next){
    const result = await AlbumModel.createAlbum(req.body)
    return res.status(result.status || 200).json(result)
  }

  static async updateAlbum(req, res, next){
    const result = await AlbumModel.updateAlbum({...req.body, id: req.params.id})
    return res.status(result.status || 200).json(result)
  }

  static async destroyAlbum(req, res, next){
    const result = await AlbumModel.destroyAlbum(req.params.id)
    return res.status(result.status || 200).json(result)
  }
}

module.exports = AlbumController