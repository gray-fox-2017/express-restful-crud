const express = require('express');
const conn = require('../models');
const dateFormatter = require('../helper/helper');
var router = express.Router();


router.get('/',(req,res,next)=> {
  conn.Memo.listMemo( memos => {
    conn.User.findAll()
    .then(users => {
      res.render('../views/pages/todo',{title:'Todos',memos:memos,users:users,dateFormatter:dateFormatter})
    })
  })
})

router.get('/add',(req,res,next)=> {

    conn.User.findAll()
    .then(users => {
      res.render('../views/pages/todoAdd',{title:'Add Todo',users:users})
    })
})

router.post('/add',(req,res,next)=> {
  console.log(req.body);
  conn.User.findOne({where:{email:req.body.email}})
  .then(user => {
    console.log(user);
    conn.Memo.create({title:req.body.title,id_user:user.id,is_complete:false,createdAt:new Date(),updatedAt:new Date()})
    .then(memo => {
      res.redirect('/todo')
    })
  })

})


router.get('/edit/:id',(req,res,next) => {

    conn.Memo.findOne({where:{id:req.params.id}})
    .then(memo => {
      console.log(memo);
      res.render('../views/pages/todoEdit',{title:'Edit Todos',memo:memo})
    })
})


router.post('/edit/:id',(req,res,next) => {
    conn.Memo.update({title:req.body.title},{where:{id:req.params.id}})
    .then(memo => {
      console.log(memo);
      res.redirect('/todo')
    })
})

router.get('/change/:id',(req,res,next) => {

  conn.Memo.findOne({where:{id:req.params.id}})
  .then(memo => {
    console.log(memo);
    if(memo.is_complete){
      conn.Memo.update({is_complete:false},{where:{id:req.params.id}})
      .then(memo => {
        console.log(memo);
        res.redirect('/todo')
      })
    }else{
      conn.Memo.update({is_complete:true},{where:{id:req.params.id}})
      .then(memo => {
        console.log(memo);
        res.redirect('/todo')
      })
    }
  })
})

router.get('/delete/:id',(req,res,next) => {
    conn.Memo.destroy({where:{id:req.params.id}})
    .then(memo => {
      console.log(memo);
      res.redirect('/todo')
    })
})




module.exports = router;
