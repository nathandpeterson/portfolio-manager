const AuthModel = require('../models/AuthModel')
const UserModel = require('../models/UserModel')

class Controller {

  static  async login(req, res, next){
    const authentication = await AuthModel.login(req.body)
    const {status, message, token} = authentication
    res.status(status).json({ message, token });
  }

  static async verifyToken(req, res, next){
    const authentication = await AuthModel.verifyToken(req.body)
    console.log('authentication result in controller', authentication)
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
}

module.exports = Controller