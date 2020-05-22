const MetaDetail = require('../model/meta_detail')
const {createMetaDetailsHelper} = require('../helpers/meta_details_helper')

const createMetaDetails = (req, res) => {
  // parsing json file
  let file = req.files.data
  let json = JSON.stringify(file.data)
  let bufferOriginal = Buffer.from(JSON.parse(json).data);
  stringData = bufferOriginal.toString('utf8')
  jsonData = JSON.parse(stringData)

  const response = createMetaDetailsHelper(jsonData)
  const insert = {product_id: req.params.productId, default_language_code: req.body.default_language, details: response}
  const createMetaDetails = new MetaDetail(insert)
  createMetaDetails.save()
  .then((result) =>{
    res.status(200).json({
      meta_details: result
    })
  })
}

const getMetaDetail = (req, res) => {
  const metaDetail = MetaDetail.findOne({product_id: req.params.productId})
  .then(result => {
    res.status(200).json({
      meta_details: result
    })
  })
}

module.exports = {
  createMetaDetails,
  getMetaDetail
}