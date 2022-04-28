const express = require('express');
const app = express();

const databaseConnection = require('../config/database'); // Una forma de importar el archivo
const productsRoutes = require('./routes/productsRoutes');
const usersRoutes = require('./routes/usersRoutes');

// Conectamos a la DB
databaseConnection.connect()

// Routes

app.use('/products', productsRoutes)   //Cuando haga una petición a /products, use las rutas de productsRoutes
app.use('/users', usersRoutes)  // Ejemplo de que puedo hacer varias Routes para distintas pags

app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000")
});

