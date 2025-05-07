// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  description: {
    type: String,
  },
  image: {
    type: String, // Will hold the file path
  },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
