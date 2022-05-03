// aca hago la config de nodemailer

require('dotenv').config() // Le digo que vaya al archivo .env y lo traiga
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    author:{
        user:process.env.MAIL,
        pass:process.env.PASSWORD // asi traigo lo que esta en el archivo .env
    }
}) // nos permite conectarnos


module.exports = transporter