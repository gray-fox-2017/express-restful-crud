const express = require('express');
const router = express.Router();
const db = require('../models')

router.get('/list/:email', function(req, res, next) {
  db.Todo.findAll({
    where:{
      user_email: req.params.email
    }
  })
  .then((data)=>{
    console.log(data);
      res.render(`Todo/list`,{todos:data, email: req.params.email});
  })
});

router.post('/add/:email',(req,res,next)=>{
  db.Todo.create({
    title: req.body.task,
    is_complete: false,
    user_email: req.params.email
  })
  .then((data)=>{
    res.redirect(`/todo/list/${req.params.email}`)
  })
})

router.get('/edit/:id',(req,res,next)=>{
  db.Todo.findOne({
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.render('Todo/edit',{todos:data})
  })
})

router.post('/update/:email/:id',(req,res,next)=>{
  db.Todo.update({
    title:req.body.task,
    is_complete:req.body.status
  },{
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.redirect(`/todo/list/${req.params.email}`)
  })
})

router.get('/delete/:email/:id',(req,res,next)=>{
  db.Todo.destroy({
    where:{
      id:req.params.id
    }
  })
  .then(data=>{
    res.redirect(`/todo/list/${req.params.email}`)
  })
})




module.exports = router;
