const ProductDetail = require('../model/product_detail')
const {productDetailsHelper} = require('../helpers/product_details_helper')
const MetaDetail = require('../model/meta_detail')


const createProductDetail = (req, res) => {
  const metaDetails = MetaDetail.findOne({product_id: req.params.productId})
  .then(result => {
    // parsing json file
    let file = req.files.data
    let json = JSON.stringify(file.data)
    let bufferOriginal = Buffer.from(JSON.parse(json).data);
    stringData = bufferOriginal.toString('utf8')
    jsonData = JSON.parse(stringData)
    
    const response = productDetailsHelper(result, jsonData, req.body.language_code)
    const insert = {product_id: req.params.productId, language_code: req.body.language_code, details: response}
    const createProductDetail = new ProductDetail(insert)
    createProductDetail.save()
    .then(result => {
      res.status(200).json({
        product_details: result
      })
    })
  })
}

const getProductDetails = (req, res) => {
  const productDetails = ProductDetail.findOne({product_id: req.params.productId, language_code: req.query.language_code})
  .then(result => {
    res.status(200).json({
      product_details: result
    })
  })
}

const updateProductDetails = (req, res) => {
  console.log(req.body.language_code)
  const productDetails = ProductDetail.findOne({product_id: req.params.productId, language_code: req.body.language_code})
  .then(result => {
    updateDetails = result.details.id(req.body.details_id)
    updateDetails.value = req.body.value
    result.save()
    .then(update => {
      res.status(200).json({
        product_details: update
      })
    })
  })
  
}

module.exports = {
  createProductDetail,
  getProductDetails,
  updateProductDetails
}