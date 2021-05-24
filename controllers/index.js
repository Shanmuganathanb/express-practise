
exports.getIndexPage = (req,res,next) => {
    res.render('index', {
        method_here: 'get',
        pageTitle: 'Home',
        path: '/'
    })
}

exports.postIndexPage = (req,res,next) => {
    const radius = parseInt(req.body.radius)
    const result = 3.14 * radius * radius
    res.render('index', {
      method_here: 'post',
      path: '/',
      pageTitle: 'Home',
      result:result
    })
}