const router = require('express').Router()
const {createProductDetail, getProductDetails, updateProductDetails} = require('../controller/product_details_controller')


router.post('/:productId/product_details', createProductDetail)

router.get('/:productId/product_details', getProductDetails)

router.patch('/:productId/product_details', updateProductDetails)

module.exports = router