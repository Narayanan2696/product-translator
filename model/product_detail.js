const mongoose = require('mongoose')

const productDetailSchema = new mongoose.Schema({
  product_id: {
    type: mongoose.Schema.Types.ObjectId, ref: 'Product'
  },
  language_code: {
    type: String
  },
  details: [{
    key: {
      type: String
    },
    value: {
      type: String
    }
  }]
})

module.exports = mongoose.model('ProductDetail', productDetailSchema)