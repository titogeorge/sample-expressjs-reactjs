var express = require('express');
var router = express.Router();
var comments = require('../services/comments')

/* GET post by user listing. */
router.get('/post/:postId', function (req, res, next) {
  console.log(req.params);
  comments.getCommentsForPostPromise(req.params.postId).then(function (data) {
    res.json(data);
  })
});

module.exports = router;
