var express = require('express');
var router = express.Router();

var cache = {};

function getPageFromCache(url, callback) {
    if (cache[url]) {
        // Get page from cache
        callback(undefined, cache[url]);
    } else {
        // Get nothing
        callback();
    }
};

function setPageToCache(url, content) {
    // Save to cache
    cache[url] = content;
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
