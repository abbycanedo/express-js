var express = require('express');
var router = express.Router();

var data =  {
              title: 'Express',
              id: 2
            }

router.get('/example',function(req,res) { 
  res.render('grid/example', data);
});

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
