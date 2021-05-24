const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const productController = require('../controllers/product')

const router = express.Router()

router.get('/', productController.getAddProduct);

router.post('/', productController.postAddProduct);

router.get('/edit',productController.getEditProduct);



router.post('/delete-product', productController.postDeleteProduct);

module.exports = router;