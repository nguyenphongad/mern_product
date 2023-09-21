const Product = require("../models/ProductModel");


const CreateProduct = (newProduct) => {
    return new Promise(async (resolve, reject) => {
        const { name, image, type, price, counstInStock, rating, description, discount } = newProduct;

        try {
            const checkProduct = await Product.findOne({ name: name });
            if (checkProduct !== null) {
                resolve({
                    status: "err",
                    message: "the name of product is already"
                })
            };
            const newProduct = await Product.create({
                name,
                image,
                type,
                price,
                counstInStock,
                rating,
                description,
                discount
            });
            if (newProduct) {
                resolve({
                    status: "oke",
                    message: "success create product",
                    data: newProduct
                });
            }

        } catch (error) {
            reject(error);
        }
    })
}
const UpdateProduct = (productId, data) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProductId = await Product.findOne({ _id: productId });
            if (checkProductId === null) {
                resolve({
                    status: "err",
                    message: "the product is not define!!!"
                });
            }
            const UpdateProduct = await Product.findByIdAndUpdate(productId, data, { new: true });
            resolve({
                status: "oke",
                message: "update success",
                data: UpdateProduct
            });
        } catch (error) {
            reject(error);
        }
    })
}
const DeleteProduct = (productId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const checkProductId = await Product.findOne({ _id: productId });
            if (checkProductId === null) {
                resolve({
                    status: "err",
                    message: "the product is not define!!!"
                });
            }
            await Product.findByIdAndDelete(productId);
            resolve({
                status: "oke",
                message: "delete success"
            });
        } catch (error) {
            reject(error)
        }
    })
}
const GetAllProduct = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Product.find();
            resolve({
                status: "oke",
                message: "get all product oke",
                data: allProduct
            })
        } catch (error) {
            reject(error)
        }
    })
}
module.exports = {
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
    GetAllProduct
}