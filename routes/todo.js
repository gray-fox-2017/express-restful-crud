'use strict'

const express = require('express')
const router = express.Router()
const models = require('../models')
const helper = require('../helper/datesformate')
/*GET Todos Listing*/
router.get('/',function(req, res, next){
  models.Todo.findAll({
    include: [
      models.User
    ],
    order: ` "id" DESC`
  })
  .then((todos)=> {
    console.log(JSON.stringify(todos));
    res.render('todos/index', {
      result: todos,
      helper: helper
    })
  })
})

router.post('/create', (req, res, next)=> {
  let body = req.body;
  models.Todo.create({
    task: body.task,
    completed: body.completed || 'FALSE',
    user_id: body.user_id
  })
  .then((todos)=> {
    res.redirect('/todos')
  })
})

router.get('/add', (req, res, next)=> {
  let user = models.User;
  user.findAll()
  .then((users)=> {
    res.render('todos/add', {
      users: users
    })
  })
})

router.get('/edit/:id', (req, res, next)=> {
  models.Todo.find({
    include: [
      models.User
    ],
    where: {
      id: req.params.id
    }
  })
  .then((todo)=> {
    models.User.findAll()
    .then((users)=> {
      res.render('todos/edit', {
        todos: todo,
        users: users
      })
    })
  })
})

router.post('/update/:id', (req, res, next)=>{
  models.Todo.update( {
    where: {
      id: req.params.id
    }
  })
  .then((todos)=> {
    todos.updateAttributes({
      task: req.body.task,
      completed: req.body.completed,
      user_id: req.body.user_id
    })
    .then(()=> {
      res.redirect('/todos')
    })
  })
})

router.get('/delete/:id', (req, res, next)=> {
  models.Todo.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((todos)=> {
    res.redirect('/todos')
  })
})

module.exports = router
