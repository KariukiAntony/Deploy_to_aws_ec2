require("dotenv").config()
const nodeMailer = require("nodemailer");
const { convert } = require('html-to-text')

exports.sendMail = (payload)=> {
  return new Promise((resolve, reject) => {
    const transporter = nodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.user,
        pass: process.env.token
      },
    });
    const text = convert(payload.html, { wordwrap: 130})
    const mailOptions = {
      from: process.env.user,
      to: payload.email,
      subject: payload.subject,
      text: text,
      html: payload.html,
    };
    transporter.sendMail(mailOptions, (error, info) =>{
      if(error){
         reject(error)
      }
      resolve(info.response)
    })
  });
}