var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

//router.get('/', (req, res, next) => {
//  let email = req.body.email;
//  db.User.find({
//    where: {'email': email}
//  })
//    .then (user => {
//      user.getTodos()
//        .then (todos => {
//          res.render('users', {'todos': todos});
//        });
//    });
//});

router.get('/:id', (req, res, next) => {
  let id = req.params.id;
  db.User.findById(id)
    .then(user => {
      user.getTodos()
        .then (todos => {
          res.render('users',{'todos':todos, title:'MEMO by svi'});
        });
    });
});

module.exports = router;
