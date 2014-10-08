var express = require('express');
var router = express.Router();
var redis = require("redis"),
  cache = redis.createClient(
		  process.env.REDIS_PORT || 6379,
		  process.env.REDIS_HOST || 'localhost');

cache.on("error", function (err) {
  console.log("Error " + err);
});

function getPageFromCache(url, callback) {
  cache.get(url, function(err, content) {
    (!err) ? callback(undefined, content) : callback();
  });
};

function setPageToCache(url, content) {
  cache.set(url, content, redis.print);
};

/* GET home page. */
router.get('/', function(req, res) {
  getPageFromCache(req.url, function(err, content) {
    if (err) return req.next(err);
    if (content) {
      console.log("CACHE: " + req.url + " [ hit ]");
      res.send(content);
    } else {
      console.log("CACHE: " + req.url + " [ miss ]");
      res.render('index', function(err, content) {
        // Render handler
        if (err) return req.next(err);
        setPageToCache(req.url, content);
        console.log("CACHE: " + req.url + " [ saved ]");
        res.send(content);
      });
    }
  });
});

router.get('/ping', function(req, res) {
  res.end('OK');
})

module.exports = router;
