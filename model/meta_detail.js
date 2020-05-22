const mongoose = require('mongoose')
const Product = require('./product')

const metaDetailSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Product'
  },
  default_language_code: {
    type: String
  },
  details: [{
    section: {
      type: String
    },
    tags: {
      type: Array
    }
  }]
})

module.exports = mongoose.model('MetaDetail', metaDetailSchema)