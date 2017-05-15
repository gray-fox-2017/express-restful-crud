var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/users', (req, res) => {
  db.User.create({email: req.body.email})
    .then(user => {
    res.json(user);
  })
})

router.post('/todos', (req, res) => {
  db.Todo.create({
    title : req.body.title,
    UserId : req.body.user_id
  })
  .then(todo => {
    res.json(todo)
  })
})

router.get('/todos', (req, res) => {
  db.Todo.findAll({})
  .then(todos => {
    res.json(todos)
  })
})

router.get('/todos/:id', (req, res) => {
  db.Todo.findById(req.params.id)
  .then(todo => {
    res.json(todo)
  })
})

module.exports = router;
