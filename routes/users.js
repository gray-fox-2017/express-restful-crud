var express = require('express');
var router = express.Router();
const db = require('../models')
const helper = require('../helper/util.js')

/* GET users listing. */
router.get('/', function(req, res, next) {
  let aidi = req.query.id
  let username = req.query.user
  db.Todo.findAll({
    where: {
      user_id: aidi
    }
  }).then( data => {
    res.render('user', {data:data, user:username, id:aidi, helper:helper})
  })
})

router.post('/buat-baru', function(req, res, next) {
  let aidi = req.body.aidi;
  let newTask = req.body.taskBaru;
  let username = '\(\∩\｀\-\´\)\⊃\━\☆\ﾟ\.\*\･\｡\ﾟ'
  db.Todo.create({
    task: newTask,
    user_id:aidi,
    is_complete: false,
    createdAt: new Date(),
    updatedAt: new Date()
  })
  .then(asd => {
    res.redirect(`/user/?id=${aidi}&user=${username}`)
  })
})

router.get('/todo-delete/:user_id/:id', function(req, res, next) {
  let todo_id = req.params.id
  let user_id = req.params.user_id
  db.Todo.destroy({
    where: {
      id: todo_id
    }
  }).then( test => {
    db.User.findOne({
      where: {
        id: user_id
      }
    }).then (data => {
      res.redirect(`/user/?id=${data.id}&user=${data.username}`)
    })
  })
})

router.post('/update/:id', function(req, res, next) {
  let todo_id = req.params.id
  let taskBaru = req.body.taskBaru
  db.Todo.update({
    task: taskBaru,
    updatedAt: new Date(),
    is_complete: false
  }, {
    where: {
      id: todo_id
    }
  }).then((afsa) => {
    db.Todo.findOne({
      where: {
        id: todo_id
      }
    }).then(data => {
      db.User.findOne({
        where:{
          id: data.user_id
        }
      }).then( data => {
        res.redirect(`/user/?id=${data.id}&user=${data.username}`)
      })
    })
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

router.get('/todo/:user_id/:id', function(req, res, next) {
  let todo_id = req.params.id;
  let user_id = req.params.user_id;
  db.Todo.update({
    is_complete: true,
    updatedAt: new Date()
  },{ where: {
      id: todo_id
    }
  }).then( test => {
    db.User.findOne({
      where: {
        id: user_id
      }
    }).then( data => {
      let username = data.username;
      res.redirect(`/user/?id=${user_id}&user=${username}`)
    })
  })
})



module.exports = router;
