var express = require('express');
var router = express.Router();
const db = require('../models');
const time = require('../helper/helper.js')


/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index')
})

router.get('/', function(req, res, next) {
  res.redirect('/home')
})

// router.post('/', function(req, res, next) {
//   db.Todo.findAll({include: {model: db.User}})
//     .then((users) => {
//       res.render('/', {
//         data: users
//       });
//     })
// });

router.post('/', function(req, res, next) {
  let eMail = req.body.email
  let userName = req.body.username
  // req.params.id = id
  db.User.findAll({
      where: {
        'username': req.body.username
      }
    })
    .then(user => {
      // res.send(user[0].id.toString())
      res.redirect(`/users/${user[0].id}`)
    })
    .catch(() => {
      db.User.create({
        username: userName,
        email: eMail
      })
      .then()
      db.User.findAll()
      .then((users) => {
        res.render('all', {data:users})
      })
    })
});

module.exports = router;