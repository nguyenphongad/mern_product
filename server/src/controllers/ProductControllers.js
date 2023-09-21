const ProductService = require('../services/ProductService');

const CreateProduct = async (req, res) => {
    try {
        const { name, image, type, price, counstInStock, rating, description } = req.body

        if (!name || !image || !type || !price || !counstInStock || !rating) {
            return res
                .status(200)
                .json({
                    status: "err",
                    message: "the input is required"
                })
        };
        const resAw = await ProductService.CreateProduct(req.body);
        return res
            .status(200)
            .json(resAw);
    } catch (error) {
        return res
            .status(404)
            .json({
                message: error
            })
    }
}
const UpdateProduct = async (req, res) => {
    try {
        productId = req.params.id;
        const data = req.body;
        if (!productId) {
            return res
                .status(200)
                .json({
                    status: "err",
                    message: " the product id is required"
                })
        };
        const resAw = await ProductService.UpdateProduct(productId, data);
        return res.status(200).json(resAw);
    } catch (error) {
        console.log(error)
        return res
            .status(404)
            .json({
                message: error
            })
    }
}
const DeleteProduct = async (req, res) => {
    try {
        const productId = req.params.id;

        if (!productId) {
            return res
                .status(200)
                .json({
                    status: "err",
                    message: "the product id is required!!"
                })
        }
        const resAw = await ProductService.DeleteProduct(productId);
        return res.status(200).json(resAw)

    } catch (error) {
        return res
            .status(404)
            .json({
                message: error
            })
    }
}
const GetAllProduct = async (req,res) => {
    const resAw = await ProductService.GetAllProduct();
    return res.status(200).json(resAw)
}
module.exports = {
    CreateProduct,
    UpdateProduct,
    DeleteProduct,
    GetAllProduct
}