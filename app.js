const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const morgan = require('morgan')
var Busboy = require('busboy')
var fileupload = require('express-fileupload')
// const { i18nMongo } = require('i18n-mongo')

// routes
const products = require('./routes/products')
const metaDetails = require('./routes/meta_details')
const productDetails = require('./routes/product_details')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log("connection is established"))
.catch( err => console.log(err))
const db = mongoose.connection
// db.on('error', (error) => console.error(error))
// db.once('open', () => console.log("connection is open"))

// app.get('/about', (req, res) => {
//   var busboy = new Busboy({ headers: req.headers });
//   console.log(busboy)
//   busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
//     console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
//     file.on('data', function(data) {
//       console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
//     });
//     file.on('end', function() {
//       console.log('File [' + fieldname + '] Finished');
//     });
//   });
// })
app.use(fileupload())
app.post('/upload', (req, res, next) => {
  // let file = req.files.data
  // let json = JSON.stringify(file.data)
  // let bufferOriginal = Buffer.from(JSON.parse(json).data);
  // console.log(bufferOriginal.toString('utf8'));
  // let file = req.body.default_language
  // console.log(file)
  next()
})



app.use(express.json())
app.use(morgan("dev"))


app.use('/products', products)
app.use('/', metaDetails)
app.use('/product', productDetails)

app.listen(process.env.PORT, () => console.log(`server is listening on PORT: ${process.env.PORT}`))
