var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.Todo.findAll({})
  .then function(())

});



module.exports = router;
