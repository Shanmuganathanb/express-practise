const path = require('path');

const express = require('express');

const rootDir = require('../util/path')

const router = express.Router()

const products = []
// const products = [
//   {title:'Prod 1', price: 20, dicounted: 5, description: 'Very good'},
//   {title:'Prod 1', price: 20, dicounted: 5, description: 'Very good'},
//   {title:'Prod 1', price: 20, dicounted: 5, description: 'Very good'}
// ]

router.get('/',(req,res,next)=>{
  res.render('product',
  {
    prods: products,
    pageTitle: 'Product',
    path: '/product'
  })
  // res.write(`Title\t Price\t Discounted\t Description\n`)
  // products.forEach((product) =>{
  //     res.write(`${product.title}\t ${product.price}\t ${product.dicounted}\t\t ${product.description}\n`)
  // })   
  // res.send();
})
router.post('/',(req,res,next) => {
  products.push({ 
    product: req.body.product,
    price : req.body.price,
    discounted: req.body.discounted,
    description: req.body.description
   });
    res.redirect('/product');
})

exports.routes = router;
exports.products = products;