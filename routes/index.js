var express = require('express');
var router = express.Router();
const db = require('../models/');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'MEMO by svi' });
});

//router.post('/', (req, res, next) => {
//  let email = req.body.email;
//  db.User.find({
//    where: {'email': email}
//  })
//    .then (user => {
//      let id = user.id;
//      res.redirect(`users/${id}`);
//    });
//  //      user.getTodos()
//  //        .then (todos => {
//  //          res.render('users', {'todos': todos});
//  //        });
//  //    });
//});
module.exports = router;
