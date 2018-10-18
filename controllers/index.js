const AuthModel = require('../models/AuthModel')

class Controller {

  static  async login(req, res, next){
    const authentication = await AuthModel.login(req.body)
    const {status, message, token} = authentication
    res.status(status).json({ message, token });
  }
}

module.exports = Controller