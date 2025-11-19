const mongoose = require('mongoose');
const { Schema } = mongoose;
const productSchema = new Schema({
    userId: Number,
    id: Number,
    title: String,
    body: String,
  });

//model
exports.products = mongoose.model('Product', productSchema);