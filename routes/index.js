var express = require('express');
var router = express.Router();
const db = require('../models');
const helper = require('../helper/util.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  db.User.findAll().then(data => {
    res.render('index', {data:data});
  })

});

router.get('/all', function(req, res, next) {
  let todos = []
  let imel = []
  db.Todo.findAll({
    include: {
      model: db.User
    }
  }).then(data => {
    res.render('show-all',{data:data, helper:helper});
  })
})

// router.post('/', (req, res, next) => {
//   let username = req.body.username;
//   res.redirect('/user', {username})
// })

module.exports = router;
