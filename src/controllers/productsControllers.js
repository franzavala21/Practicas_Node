const databaseConnection = require("../../config/database")

const getAllproducts = (req, res)=>{
    databaseConnection.query('SELECT * FROM products', (error, data) =>{
        if (error) {
            console.log(error)

        }else {
            res.render('pages/products', {
            products: data
            })
        }

    }) //Consulto la base de datos

    

}

const getProductsbyId =(req,res)=>{
    res.render('pages/products')
}


module.exports = {getAllproducts, getProductsbyId}
