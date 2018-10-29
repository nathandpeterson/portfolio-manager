const InformationModel = require('../models/InformationModel')

class InformationController  {

  static async getAllInformation(req, res){
    const result = await InformationModel.getAll()
    return res.status(result.status || 200).json(result)
  }

  static async updateInformation(req, res){
    const result = await InformationModel.updateInformation(req.body)
    return res.status(result.status || 200).json(result)
  }

}

module.exports = InformationController