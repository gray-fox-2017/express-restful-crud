var express = require('express');
var router = express.Router();
var models = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  models.User.findAll()
  .then((users) =>{
    res.render('user', {
      user : users
    });
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/adduser', (req,res,next) =>{
  res.render('user')
})

router.post('/create', (req,res,next)=>{
  models.User.create({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email
  })
  .then(()=>{
    res.redirect('/users')
  })
})


router.get('/edit/:id', function(req,res,next) {
  models.User.find({
    where :  {
      id : req.params.id
    }
  })
  .then(function(users) {
    res.render('user_edit', {
      data : users
    })
  })
})


router.post('/update/:id', function(req,res,next) {
  models.User.update({
    firstname : req.body.firstname,
    lastname : req.body.lastname,
    email : req.body.email
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function() {
    res.redirect('/users')
  })
})

router.get('/delete/:id', (req,res,next) =>{
  models.User.destroy({
    where : {
      id : req.params.id
    }
  })
  .then( ()=>{
    res.redirect('/users')
  })
})


module.exports = router;
