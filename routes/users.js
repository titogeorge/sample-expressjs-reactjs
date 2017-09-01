var express = require('express');
var router = express.Router();
var users = require('../services/users')

/* GET users listing. */
router.get('/', function (req, res, next) {
  users.getUsersPromise().then(function (data) {
    res.json(data);
  })
});

module.exports = router;
