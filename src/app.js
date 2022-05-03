const express = require('express');
const app = express();
const path = require('path');

const databaseConnection = require('../config/database'); // Una forma de importar el archivo
const mailRoutes = require('./routes/emailRoutes');
const productsRoutes = require('./routes/productsRoutes');



// Conectamos a la DB
databaseConnection.connect()

/////////////// Routes /////////////////////////////////
//app.use('/users', usersRoutes)  // Ejemplo de que puedo hacer varias Routes para distintas pags


app.use('/products', productsRoutes)   //Cuando haga una petición a /products, use las rutas de productsRoutes

app.use('/sendMail', mailRoutes)
/////////////////////////////////////////////////////////




app.set('views',path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, 'public')));


app.listen(3000, ()=>{
    console.log("Escuchando el puerto 3000")
});

