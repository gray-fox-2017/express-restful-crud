var express = require('express');
const db = require('../models');
const util = require('../helpers/util.js')
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res, next) => {
  db.Todo.findAll({
    order: [['createdAt', 'ASC']]
  })
  .then(todos => {
    db.User.findAll()
    .then(users => {
      res.render('tasks', { 'todos': todos, 'users': users, 'util': util })
    })
  })
})

router.post('/', (req, res, next) => {
  let title = req.body.task;
  let email = req.body.email;
  db.User.findOne({where: {'email': email}})
  .then(user => {
    db.Todo.create({
      'title': title,
      'is_complete': false,
      'UserId': user.id
    })
    .then(() => {
      res.redirect(`/tasks`)
    })
  })
})

router.get('/edit/:id', function(req, res, next) {
  let id = req.params.id
  db.Todo.findById(id)
  .then(todo => {
    res.render('task-edit', { 'todo': todo })
  })
});

router.post('/edit/:id', function(req, res, next) {
  let id = req.params.id
  let title = req.body.task
  let status = req.body.is_complete
  db.Todo.findById(id)
  .then(todo => {
    todo.update({'title': title, 'is_complete': status})
    .then(() => {
      res.redirect('/tasks')
    })
  })
});

router.get('/delete/:id', function(req, res, next) {
  let id = req.params.id
  db.Todo.destroy({
    where: {
      'id': id
    }
  })
  .then(() => {
    res.redirect('/tasks')
  })
});

router.post('/:id', (req, res, next) => {
  let title = req.body.task;
  let UserId = req.params.id;
  db.Todo.create({
    'title': title,
    'is_complete': false,
    'UserId': UserId
  })
  .then(() => {
    res.redirect(`/tasks/${UserId}`)
  })
})

module.exports = router;
