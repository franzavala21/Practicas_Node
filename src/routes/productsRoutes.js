//Aca vamos a guardar las rutas de los productos

const express = require('express')
const getAllproducts = require('../controllers/productsControllers')
const productsRoutes =  express.Router()    //Inicializamos todas las rutas de los productos

productsRoutes.get("/", getAllproducts)

module.exports = productsRoutes