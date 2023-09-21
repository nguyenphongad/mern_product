const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductControllers');

router.post('/createProduct', ProductController.CreateProduct);
router.put('/updateProduct/:id', ProductController.UpdateProduct);
router.delete('/deleteProduct/:id', ProductController.DeleteProduct);
router.get('/getAllProduct', ProductController.GetAllProduct);


module.exports = router;
