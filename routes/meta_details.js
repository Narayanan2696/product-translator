const router = require('express').Router()
const {createMetaDetails, getMetaDetail} = require('../controller/meta_details_controller')


router.post('/products/:productId/meta_details', createMetaDetails)

router.get('/products/:productId/meta_details', getMetaDetail)

module.exports = router