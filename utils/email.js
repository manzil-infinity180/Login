var nodemailer = require("nodemailer");
const sendEmail = async options =>{
  // create a transporter 
  const transporter = nodemailer.createTransport({
    host : process.env.EMAIL_HOST,
    port : process.env.EMAIL_PORT,
    auth:{
      user: process.env.EMAIL_USERNAME,
      pass : process.env.EMAIL_PASSWORD
    }
  })
  // mailOption 
  const mailOption = {
    from : 'Rahul Noob <rahulvs2809@gmail.com>',
    to : options.email,
    subject : options.subject,
    text : options.message
  }
  // sending email 
  await transporter.sendMail(mailOption);
};
module.exports = sendEmail;