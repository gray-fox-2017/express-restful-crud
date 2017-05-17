var express = require('express');
var router = express.Router();
const models = require('../models')
const helper = require('../helper/datesformate')

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll()
  .then((users)=> {
    res.render('users/index', {
      users: users
    })
  })
});

router.post('/create', (req, res, next)=> {
  models.User.create({
    name: req.body.name,
    email: req.body.email
  })
  .then((users)=>{
    res.redirect('/users')
  })
})

router.get('/add', (req, res, next)=> {
  models.User.findAll()
  .then((users)=> {
    res.render('users/add', {
      users: users
    })
  })
})

router.post('/update/:id', (req, res, next)=>{
  models.User.find({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    if (users){
      users.updateAttributes({
        name: req.body.name,
        email: req.body.email
      })
      .then(()=> {
        res.redirect('/users')
      })
    }
  })
})

router.get('/edit/:id', (req, res, next)=> {
  models.User.find({
    where: {
      id: req.params.id
    }
  })
  .then((users)=>{
    res.render('users/edit', {
      users: users
    })
  })
})

router.get('/delete/:id', (req, res, next)=> {
  models.User.destroy({
    where: {
      id: req.params.id
    }
  })
  .then((users)=> {
    res.redirect('/users')
  })
})
module.exports = router;
