var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('test/hello', { title: 'Sample | Hello', app: 'Sample' });
});

router.get('/stylus', function(req, res, next) {
  res.render('test/stylus', { title: 'Sample | Stylus', app: 'Sample' });
});

router.get('/react', function(req, res, next) {
  res.render('test/react', { title: 'Sample | React', app: 'Sample' });
});

module.exports = router;
