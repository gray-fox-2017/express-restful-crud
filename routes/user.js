const express = require('express');
const conn = require('../models');
var router = express.Router();


router.get('/',(req,res,next) => {
    conn.User.findAll()
    .then(users => {
      res.render('../views/pages/user',{title:'Users',users:users})
    })
})

router.get('/add',(req,res,next) => {
      res.render('../views/pages/userAdd',{title:'Add User'})
})


router.post('/add',(req,res,next) => {
    conn.User.create({email:req.body.email,createdAt:new Date(),updatedAt:new Date()})
    .then(user => {
      res.redirect('/user')
    })
})


router.get('/edit/:id',(req,res,next) => {

    conn.User.findOne({where:{id:req.params.id}})
    .then(user => {
      console.log(user);
      res.render('../views/pages/userEdit',{title:'Edit Users',user:user})
    })
})


router.post('/edit/:id',(req,res,next) => {
    conn.User.update({email:req.body.email},{where:{id:req.params.id}})
    .then(user => {
      console.log(user);
      res.redirect('/user')
    })
})

router.get('/delete/:id',(req,res,next) => {
    conn.User.destroy({where:{id:req.params.id}})
    .then(user => {
      console.log(user);
      res.redirect('/user')
    })
})




module.exports = router;
