var express = require('express');
var router = express.Router();
let db = require('../models')

/* GET home page. */
router.get('/register', (req, res) => {
  res.render('register')
})

router.post('/register', (req, res) => {
  let email = req.body.email
  db.User.findOrCreate({
    where: {'email' : email}
  }).spread((User, created) => {
    if (created) {
      res.json(`created ${email}`)
      res.redirect('/tasks')
    } else {
      res.json("already in use")
      res.redirect('/')
    }
  })
})

router.get('/tasks', function(req, res, next) {
  db.Todo.findAll({
    order: [['createdAt', 'ASC']], include: {model: db.User}
  }).then(tasks => {
    res.json(tasks)
    // res.render('tasks')
  })
});

router.post('/tasks/new', (req,res) => {
  let task = req.body.task
  let email = req.body.email
  db.User.findOne({where: {'email' : email}}).then(user => {
    if (user === null) {
      res.json("ga adaa")
    } else {
      db.Todo.create({
        title: task,
        UserId: user.id
      })
      res.json(`task ${task} with userId ${user.id} has been Created`);
    }
  })
  // db.Todo.create({title: task})
})

router.post('/tasks/check/:id', (req,res) => {
  let id = req.params.id
  db.Todo.findOne({where: {'id' : id}}).then(task => {
    if (task === null) {
      res.json("not found your ID sorry :'( )")
    } else {
      task.update({complete: true});
      res.json(`${task.id} hasbeen completed`)
    }
  })
})

router.post('/tasks/uncheck/:id', (req,res) => {
  let id = req.params.id
  db.Todo.findOne({where: {'id' : id}}).then(task => {
    if (task === null) {
      res.json("not found your ID sorry :'( )")
    } else {
      task.update({complete: false});
      res.json(`${task.id} not complete`)
    }
  })
})

router.post('/tasks/edit/:id', (req,res) => {
  let id = req.params.id
  let newTask = req.body.task
  db.Todo.findOne({where: {'id' : id}}).then(task => {
    if (task === null) {
      res.json("not found your ID sorry :'( )")
    } else {
      task.update({title: newTask, complete: false});
      res.json(`task with id ${id} hasbeen updated`)
    }
  })
})

router.get('/tasks/delete/:id', (req,res) => {
  let id = req.params.id
  db.Todo.findOne({where: {'id' : id}}).then(task => {
    if (task === null) {
      res.json("not found your ID sorry :'( )")
    } else {
      task.destroy()
      res.json(`your ${task} has been destroyed`)
    }
  })
})

module.exports = router;
