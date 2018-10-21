const AuthModel = require('../models/AuthModel')
const UserModel = require('../models/UserModel')
const AlbumModel = require('../models/AlbumModel')
const ImageModel = require('../models/ImageModel')

class Controller {

  static  async login(req, res, next){
    const authentication = await AuthModel.login(req.body)
    const {status, message, token} = authentication
    res.status(status).json({ message, token });
  }

  static async verifyToken(req, res, next){
    const authentication = await AuthModel.verifyToken(req.body)
    if(authentication){
      return res.status(200).json({message: "Token verified"})
    } else {
      return res.status(401).json({message: "bad token"})
    }
  }

  static async updateUser(req, res, next){
    const result = await UserModel.updateUser(req.body)
    return res.json({message: 'updated user information'})
  }

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

module.exports = Controller