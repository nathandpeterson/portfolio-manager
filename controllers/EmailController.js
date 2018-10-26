const EmailService = require('../services/EmailService')

module.exports = async function contact(req, res, next){
  try {  
    await EmailService.sendEmail(req.body)
    return res.status(200).json({message: 'success'})
  } catch(error){
    return res.status(400).json({message: 'something went wrong'})
  }
}