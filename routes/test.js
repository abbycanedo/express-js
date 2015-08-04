var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('test/hello', { title: 'BuildEx | Hello', app: 'BuildEx' });
});

router.get('/stylus', function(req, res, next) {
  res.render('test/stylus', { title: 'BuildEx | Hello', app: 'BuildEx' });
});

module.exports = router;
