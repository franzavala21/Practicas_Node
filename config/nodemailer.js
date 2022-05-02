// aca hago la config de nodemailer

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    author:{
        user:'francizavala15@gmail.com',
        pass:'belgrano2015' 
    }
}) // nos permite conectarnos


module.exports = transporter