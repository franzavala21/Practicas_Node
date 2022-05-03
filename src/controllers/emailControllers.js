const transporter = require("../../config/nodemailer")

require('dotenv').config()

const sendAnEmail = (req, res) => { 
    const {destino} = req.body; // Cuando se haga la peticion post, voy a guardar la info con lo que traiga con destino
    let mailOptions = { 
        from: process.env.MAIL, 
        to: destino, //le va a estar llegando a cada destinatario
        subject: "Bienvenido!", 
        html: `<h1>Te damos la bienvenida a nuestro sitio - Fran Zavala</h1>
        <p>En este email te damos la bienvenida a este sitio hecho por Fran</p>` }
        transporter.sendMail(mailOptions, (error, data) => { 
            if (error) { 
                console.log(error) 
            } else {
                 res.send("Enviado!") 
                } 
            }) 
        }
module.exports = sendAnEmail;