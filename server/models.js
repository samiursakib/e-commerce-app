const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    shortcode: String,
    price: Number,
    // image: {
    //     data: Buffer,
    //     contentType: String
    // },
    quantity: Number,
    description: String,
    countItems: {
        type: String,
        default: 0
    }
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;