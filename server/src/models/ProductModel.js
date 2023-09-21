const mongoose = require('mongoose');

const productModel = new mongoose.Schema(
    {
        name: { type: String, required: true, unique: true },
        image: { type: String, required: true },
        type: { type: String, required: true },
        price: { type: Number, required: true },
        counstInStock: { type: Number, required: true },
        rating: { type: Number, required: true },
        description: { type: String },
        discount: { type: Number },
    }, {
    timestamps: true
}
);

const Product = mongoose.model("Product", productModel);
module.exports = Product
