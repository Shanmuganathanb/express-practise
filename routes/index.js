const path = require('path');

const express =  require('express');

const indexController = require('../controllers/index')
const cartController = require('../controllers/cart')

const router = express.Router();

router.get('/cart', cartController.getCart);

router.post('/cart', cartController.postCart);

router.post('/cart-delete-item', cartController.postCartDeleteProduct);

router.get('/', indexController.getIndexPage);

router.post('/', indexController.postIndexPage);

module.exports = router;