var express = require('express');
const db = require('../models');
const helper = require('../helpers/util.js');
var router = express.Router();

/* GET tasks listing. */

router.get('/', function(req,res,next) {
  db.Todo.findAll({include: {model:db.User},order: [['is_complete','ASC']]})
    .then (todos => {
      res.render('tasks', {'todos':todos, 'helper': helper});
    });
});

router.get('/create',function(req,res,next) {
  res.render('taskCreate');
});

router.post('/create',function(req,res,next) {
  let email = req.body.email;
  let title = req.body.newTask;
  db.User.findOne({where:{'email':email}})
    .then (user => {
      db.Todo.create({'title': title, 'UserId': user.id, 'is_complete': false})
        .then (() => {
          res.redirect('/tasks');
        });
    });
});

router.get('/edit/:id', function(req,res,next) {
  let id = req.params.id;
  console.log(id);
  db.Todo.update({is_complete: true},{where:{id: id}})
    .then (() => {
      console.log(`before redirect`);
      res.redirect('/tasks');
    });
});

router.get('/delete/:id', function(req,res,next) {
  let id = req.params.id;
  db.Todo.destroy({where: {id:id}})
    .then(() => {
      res.redirect('/tasks');
    });
});

module.exports = router;
