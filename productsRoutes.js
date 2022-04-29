//Aca vamos a guardar las rutas de los productos

const express = require('express')
const { getAllproducts, getProductsbyId } = require('../controllers/productsControllers')

const productsRoutes =  express.Router()    //Inicializamos todas las rutas de los productos

productsRoutes.get("/", getAllproducts)

productsRoutes.get('/unProducto', getProductsbyId)

module.exports = productsRoutes