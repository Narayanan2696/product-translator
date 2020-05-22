const Product = require('../model/product')

const createProduct = (req, res) => {
  const createProduct = new Product(req.body)
  createProduct.save()
  .then((result) => {
    res.status(200).json({
      product: result
    })
  })
  .catch( err => {
    res.status(400).json({
      error: err
    })
  })
}

const getProducts = (req, res) => {
  const products = Product.find()
  .then((result) => {
    res.status(200).json({
      products: result
    })
  })
  .catch( err => {
    res.status(400).json({
      error: err
    })
  })
}

module.exports = {
  createProduct,
  getProducts
}