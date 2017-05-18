var express = require('express');
var router = express.Router();
let db = require('../models')
let helper = require('../helper/help')

/* GET users listing. */
router.get('/', function(req, res) {
  db.Todo.findAll({include:[{model:db.User}]})
  .then(function(todos){
    res.render('all', {title:`All Task`,todos:todos,helper:helper})
  })
  .catch(err => {
    console.log(err);
  })
});


module.exports = router;
