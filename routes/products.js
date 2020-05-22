const router = require('express').Router()
const { createProduct, getProducts } = require('../controller/products_controller')

router.post('/', createProduct )
router.get('/', getProducts )

module.exports = router