var express = require('express');
var router = express.Router();
var helper = require('../helper/helpers.js')
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.Todo.findAll(
    { include: [{ model: db.User }]}
  )
  .then((todos) => {
    res.render('tasks', {data: todos});
  })
  .catch((err) => {
    console.log(err);
  })
});

router.post('/', function(req, res, next){
  let task = req.body.task;
  let idUser = req.body.UserId;
  db.Todo.create({
    'title': task,
    'UserId': idUser
  })
  .then(() => {
    res.redirect('/tasks');
  })
  .catch((err) => {
    console.log(err);
  });
})

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db.Todo.destroy({
    where: {'id': id}
  })
  .then(() => {
    res.redirect('/tasks');
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;
