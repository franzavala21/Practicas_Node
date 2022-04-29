const getAllproducts = (req, res)=>{
    res.render('pages/index')

}

const getProductsbyId =(req,res)=>{
    res.render('pages/products')
}

module.exports = {getAllproducts, getProductsbyId}
