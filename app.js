const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const errorHandler = require('./controllers/error');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const indexPage = require('./routes/index');
const productPage = require('./routes/product');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/product',productPage);
app.use(indexPage);

app.use(errorHandler.get404);

app.listen(3000);