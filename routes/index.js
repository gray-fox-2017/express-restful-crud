var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

router.post('/', function(req, res, next){
  let newName = req.body.newName;
  let newEmail = req.body.newEmail;
  let email = req.body.email;
  let name = req.body.name;

  if(newName && newEmail){
    db.User.create({
      'name': newName,
      'email': newEmail
    })
    .then(() => {
      db.User.findAll({
        where: {
          'email': newEmail
        }
      })
      .then((users) => {
        let idUser = users[0].id
        res.redirect('/user/' + idUser);
      })
    })
    .catch((err) => {
      console.log(err);
    });
  } else {
    db.User.findAll({
      where: {
        'email': email
      }
    })
    .then((users) => {
      let idUser = users[0].id
      res.redirect('/user/' + idUser);
    })
  }
})

module.exports = router;
