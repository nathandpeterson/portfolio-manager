const db = require('../db/knex.js')

class InformationModel {

  static async getAll(){
    return await db('information')
  }

  static async updateInformation(data){
    const { id, about, homepage_image } = data
    try {
      const [result] = await db('information').where({id})
            .update({about, homepage_image}).returning('*')
      return result
    } catch(err){
      return {message: err.message, status: 400}
    }
  }

}

module.exports = InformationModel