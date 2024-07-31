const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id:Number,
    name: String,
    desc: String,
    price: Number,
    image: String,
    stock: Number
});

let product = mongoose.model('Product', productSchema);

module.exports = product;