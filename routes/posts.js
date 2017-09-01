var express = require('express');
var router = express.Router();
var posts = require('../services/posts')

/* GET post by user listing. */
router.get('/user/:userId', function (req, res, next) {
  console.log(req.params);
  posts.getPostsForUserPromise(req.params.userId).then(function (data) {
    res.json(data);
  })
});

module.exports = router;
