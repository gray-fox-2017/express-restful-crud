var express = require('express');
var router = express.Router();
const db = require('../models')
const helper = require('../helper/util.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let aidi = req.body.aidi;
  db.Todo.findAll({
    where: {
      user_id: aidi
    }
  }).then( data => {
    res.render('user', {data:data, id:aidi, helper:helper})
  })
})

router.get('/todo-delete/:id', function(req, res, next) {
  let todo_id = req.params.id
  db.Todo.destroy({
    where: {
      id: todo_id
    }
  }).then( test => {
    res.redirect('/')
  })
})

router.post('/update/:id', function(req, res, next) {
  let todo_id = req.params.id
  let taskBaru = req.body.taskBaru
  db.Todo.update({
    task: taskBaru,
    updatedAt: new Date()
  }, {
    where: {
      id: todo_id
    }
  }).then((afsa) => {
    res.redirect('/')
  })
})

router.get('/todo-edit/:id', function(req, res, next) {
  let todo_id = req.params.id
  db.Todo.findById(todo_id, {
    where: {
      id: todo_id
    }
  }).then(data => {
    res.render('editor', {data:data})
  })
})

router.get('/todo/:id', function(req, res, next) {
  let todo_id = req.params.id
  db.Todo.update({
    is_complete: true,
    updatedAt: new Date()
  },{ where: {
      id: todo_id
    }
  }).then( test => {
    res.redirect('/')
  })
})

router.post('/', function(req, res, next) {
  let aidi = req.body.aidi;
  let newTask = req.body.taskBaru;
  let imel = '';
  let yuser = '';
  if (newTask !== undefined && newTask !== null && newTask !== "") {
    db.Todo.create({
      task: newTask,
      user_id: aidi,
      is_complete: false,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(() => {
      res.redirect('/')
    })
  } else {
    db.User.findById(aidi)
    .then( data => {
      imel = data.email;
      yuser = data.username;
    })
    db.Todo.findAll({
      where: {
        user_id: aidi
      }
    }).then( data => {
      res.render('user', {data:data, id:aidi, helper:helper, email:imel, user:yuser})
    })
  }
 });

module.exports = router;
