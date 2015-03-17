var express = require('express');
var router = express.Router();

router.get('/sandbox', function(req, res, next) {
  res.render('sandbox');
});


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
