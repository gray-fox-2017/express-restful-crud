var express = require('express');
var router = express.Router();
const db = require('../models');
const time = require('../helper/helper.js')

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id
  db.Todo.findAll({
      include: {
        model: db.User
      },
      where: {
        user_id: id
      }
    })
    .then(todo => {
      // res.send(todo)
      res.render('user', {
        data: todo,
        time: time
      })
    })
})

router.get('/', function(req, res, next) {
  let id = req.params.id
  db.Todo.findAll({
      include: {
        model: db.User
      }
    })
    .then(todo => {
      // res.send(todo)
      res.render('all', {
        data: todo
      })
    })
})


router.post('/:id', function(req, res, next) {
  let email = req.body.email
  let username = req.body.username
  // req.params.id = id
  db.User.findAll({
      where: {
        'username': username
      }
    })
    .then(user => {
      res.render('/users/:id', {
        data: user
      })
    })
});

router.get('/delete/:id', (req, res, next) => {
  let id = req.params.id
  db.Todo.destroy({
    where:{
      id: id
    }
  })
  .then(() => {
    res.redirect(`/home`)
  })
});

module.exports = router;