const { transporter } = require("../../config/nodemailer")

const sendAnEmail = (req, res) => {
    let mailOptions ={
        from:'francizavala15@gmail.com',
        to: 'inmobiliariazavalaseppey@gmail.com',
        subjetc: 'Prueba NodeJS',
        text: 'Esto es una prueba ' // tambien puedo agregar etiquetas html

    }
    
    transporter.sendMail(mailOptions, (error, data) =>{
        if(error){
            console.log(error)
        }else{
            res.send('enviado')
        }
    })
}

module.exports = sendAnEmail