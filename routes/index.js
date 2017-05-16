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

router.post('/', function(req, res, next) {
  let aidi = req.body.aidi
  db.User.findOne({
    where: {
      id: aidi
    }
  }).then( data => {
    let input = `?id=${data.id}&user=${data.username}`
    res.redirect(`/user/${input}`)
  })
})

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

router.get('/all/todo-delete/:id', function(req, res, next) {
  let todo_id = req.params.id;

  db.Todo.destroy({
    where: {
      id: todo_id
    }
  }).then(asal => {
    res.redirect('/all')
  })
})

router.get('/all/todo/:id', function(req, res, next) {
  let todo_id = req.params.id;

  db.Todo.update({
    is_complete: true
  },{
      where: {
      id: todo_id
    }
  }).then(asal => {
    res.redirect('/all')
  })
})

router.get('/all/todo-edit/:id', function(req, res, next) {
  let todo_id = req.params.id;
  db.Todo.findOne({
    where: {
      id: todo_id
    }
  }).then( data => {
    res.render('editor-all', {data:data})
  })
})

router.post('/all/update/:id', function(req, res, next) {
  let todo_id = req.params.id;
  let newTask = req.body.taskBaru;
  db.Todo.update({
    is_complete: false,
    task: newTask,
    updatedAt: new Date()
  },{
    where: {
      id: todo_id
    }
  }).then( asal => {
    res.redirect('/all')
  })
})

module.exports = router;
