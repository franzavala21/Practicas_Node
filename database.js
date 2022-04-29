//Se va a encargar de la conexión con la base de datos
const mysql2 = require('mysql2');

const databaseConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'heladeria'
})

databaseConnection.connect((error)=>{
    if(error) {
        console.log(error)
    } else {
        console.log('Servidor está conectado a MySQL')
    }
})

module.exports = databaseConnection // si quiero exportar mas de una cosa, lo pongo entre {}
