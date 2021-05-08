const path = require('path');

const express =  require('express');

const rootDir = require('../util/path')

const router = express.Router();

router.get('/', (req,res,next) => {
  res.render('index', {
    method_here: 'get',
    pageTitle: 'Home',
    path: '/'
  })
})
router.post('/', (req,res,next) => {
  const radius = parseInt(req.body.radius)
  const result = 3.14 * radius * radius
  res.render('index', {
    method_here: 'post',
    path: '/',
    pageTitle: 'Home',
    result:result
  })
})

module.exports = router;