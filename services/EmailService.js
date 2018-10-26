const nodemailer = require('nodemailer')
const emailUsername = process.env.EMAIL_USERNAME
const emailPassword = process.env.EMAIL_PASSWORD
const owner = process.env.OWNER_EMAIL

 class EmailService {

  static createTransport(){
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
             user: emailUsername,
             pass: emailPassword
         }
     })
     return transporter
  }

  static composeEmail(body){
    const {email, name, emailContent} = body
    return `<p>You recieved an email from ${name} at ${email}.</p>
              <hr /> 
              <p>${emailContent}</p>
        <p>This message was created by a robot server</p>`
  }

  static createEmailOptions(body){
    const {email, name, emailContent} = body
    const text = `<p>From: ${email} </p>
        <p>You recieved an email from ${name}.</p>
          <hr /> <p>${emailContent}</p>
        <p>This message was created by a robot server</p>`
    return {
      from: emailUsername,
      to: owner,
      subject: 'Somebody contacted you from your website',
      html: text
    }
  }

  static sendEmail(body){
    const transporter = this.createTransport()
    const mailOptions = this.createEmailOptions(body)
    transporter.sendMail(mailOptions, (err, info) => {
      if(err){
        console.log("Error sending email: ", err.message)
        throw new Error({status: 400, message: err.message})
      } else {
        return({message: info})
      }
    })
  }

 }

 module.exports = EmailService