const AuthModel = require('../models/AuthModel')

class Controller {

  static  async login(req, res, next){
    const authentication = await AuthModel.login(req.body)
    const {status, message} = authentication
    res.status(status).json({ message });
  }
}

module.exports = Controller