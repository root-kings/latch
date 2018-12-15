var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/splash', function(req, res, next) {
  res.render('splash', { title: 'Splash Page' });
});

module.exports = router;
