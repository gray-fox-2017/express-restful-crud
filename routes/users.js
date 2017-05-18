var express = require('express');
var router = express.Router();
const db = require('../models');

router.post('/todo',function(req,res,next) {
  db.User.findOrCreate({
    where : { email : req.body.user_email}
  })
  .then(function(user) {
    db.User.findAll()
    .then(function(todos) {
      res.render('todo',{id : user[0].dataValues.id, todos : todos})
      var tmp_id =  user[0].dataValues.id;
    })
  })
  .catch(function(err) {
    console.log(err);
  })
})

router.get('/todo/add',function(req,res,next) {
  db.Todo.create({
    title : req.body.title,
    is_complete : false,
    email_id : req.body.email_id
  })
  .then(function() {
    res.redirect('/todo')
    console.log(req.body.title);
    console.log(req.body.email_id);
  })
})

router.get('/todo',function(req,res,next) {
  db.Todo.findAll()
  .then(function(todos) {
    res.render('todo', {todos : todos})
  })
})

module.exports = router;
