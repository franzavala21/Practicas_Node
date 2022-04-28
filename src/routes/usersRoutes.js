//Aca vamos a guardar las rutas de los productos

const express = require('express')
const usersRoutes =  express.Router()    //Inicializamos todas las rutas de los productos

usersRoutes.get("/", (req, res)=>{
    res.send('Hola mundo')

})

module.exports = usersRoutes