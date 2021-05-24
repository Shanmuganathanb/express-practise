const Product = require('../models/product')

exports.getAddProduct = (req,res,next)=>{
  Product.fetchAll(products => {
    res.render('product', {
    prods: products,
    pageTitle: 'Product',
    path: '/product',
    editing:null
    });
});  
}

exports.postAddProduct = (req,res,next) => {
  const prodId = req.body.productId;
  if (prodId){
    const updatedProd = req.body.product;
    const updatedPrice = req.body.price;
    const updatedDiscounted = req.body.discounted;
    const updatedDesc = req.body.description;
    const updatedProduct = new Product(
      prodId,
      updatedProd,
      updatedPrice,
      updatedDiscounted,
      updatedDesc,
    );
    updatedProduct.save();
    return res.redirect('/product');
  }
  else{
    const Prod = req.body.product;
    const Price = req.body.price;
    const Discounted = req.body.discounted;
    const Desc = req.body.description;
    const NewProduct = new Product(
      null,
      Prod,
      Price,
      Discounted,
      Desc,
    );
    NewProduct.save();
    return res.redirect('/product');
  }
}

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit;
    if (!editMode) {
      return res.redirect('/product');
    }
    const prodId = req.query.productId;
    Product.findById(prodId, product => {
      if (!product) {
        return res.redirect('/product');
      }
      res.render('edit', {
        pageTitle: 'Edit Product',
        path: '/edit-product',
        editing: editMode,
        product: product,
        productId: prodId
      });
    });
};
  
// exports.postEditProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   console.log(req)
//   const updatedProd = req.body.product;
//   const updatedPrice = req.body.price;
//   const updatedDiscounted = req.body.discounted;
//   const updatedDesc = req.body.description;
//   const updatedProduct = new Product(
//     prodId,
//     updatedProd,
//     updatedDiscounted,
//     updatedDesc,
//     updatedPrice
//   );
//   updatedProduct.save();
//   return res.redirect('/product');
//   };


exports.postDeleteProduct = (req, res, next) => {
    const prodId = req.body.productId;
    console.log(prodId);
    Product.deleteById(prodId);
    res.redirect('/product');
};