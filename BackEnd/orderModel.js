const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    id: Number,
    userid: String,
    productid: String,
    qty: Number,
    price: String,
    address: String,
    status: String
});

let order = mongoose.model('Order', orderSchema);

module.exports = order;
