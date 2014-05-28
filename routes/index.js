var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index');
});

router.get('/ping', function(req, res) {
	res.end('OK');
})

module.exports = router;
