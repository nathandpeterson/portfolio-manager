const AuthModel = require('../models/AuthModel')
const UserModel = require('../models/UserModel')
const AlbumModel = require('../models/AlbumModel')

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
    return res.status(200).json(result)
  }

  static async getAlbum(req, res, next){
    console.log('req params', req.params.id)
    const result = await AlbumModel.getOne(req.params)
    return res.status(200).json(result)
  }
}

module.exports = Controller