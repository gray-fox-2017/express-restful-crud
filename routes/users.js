var express = require('express');
var router = express.Router();
var models = require('../models')
/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll({})
    .then(function (users){
      res.render('users/index', {
        users : users
      })
    })
});

router.post('/create', (req, res, next)=>{
  models.User.create({
    name: req.body.name,
    email: req.body.email
  })
  .then (function(user){
    res.redirect('/users')
  })
  })


  router.get('/add', (req, res, next)=>{
    res.render('users/add')
  })

router.get('/edit/:id', (req, res, next)=>{
  models.User.find({
    where:{
      id: req.params.id
    }
    })
    .then (function(users){
      res.render('/users/edit', {
        users : users
    })
  })
})






module.exports = router;
