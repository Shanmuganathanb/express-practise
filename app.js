const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded());

app.get('/',(req,res,next)=>{
    res.send("<form action='/result' method='POST'><input type='number' step='any' name='radius'><button type='submit'>Submit</button></form>")
})
app.post('/',(req,res,next)=>{
    const radius = parseInt(req.body.radius)
    const result = 3.14 * radius * radius
    res.send(`<h3>The Area is <span>${result}</span></h3>`)
})
const products = [
    {title:'Prod 1', price: 20, dicounted: 5, description: 'Very good'},
    {title:'Prod 1', price: 20, dicounted: 5, description: 'Very good'},
    {title:'Prod 1', price: 20, dicounted: 5, description: 'Very good'}
]
app.get('/product',(req,res,next)=>{
    res.write(`Title\t Price\t Discounted\t Description\n`)
    products.forEach((product) =>{
        res.write(`${product.title}\t ${product.price}\t ${product.dicounted}\t\t ${product.description}\n`)
    })   
    res.send();
})
app.listen(4000);