var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
