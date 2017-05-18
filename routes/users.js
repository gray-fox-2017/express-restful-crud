var express = require('express');
var router = express.Router();
let db = require('../models')
let helper = require('../helper/help')

/* GET users listing. */
router.get('/:id', function(req, res) {
  let id = req.params.id
  db.User.findById(id)
  .then(user => {
    // user.getTodos()
    db.Todo.findAll({where:{user_id:`${user.id}`}})
    .then(function(todos){
      // todos.createdAt=
      res.render('users', {title:`User ${user.email} Todo`,user:user,todos:todos})
    })
  })
  .catch(err => {
    console.log(err);
  })
});

router.post('/:id',function(req,res){
  db.Todo.create({
    'title':req.body.task,
    'is_complete':false,
    'user_id':req.params.id,
    'createdAt':new Date()
  })
  .then(() => {
    res.redirect(`/users/${req.params.id}`)
  })
  .catch(err => {
    console.log(err);
  });
})

router.get('/edit/:idA/:idB',(req,res)=>{
  db.User.findById(req.params.idA)
  .then(user=>{
    db.Todo.findById(req.params.idB)
    .then(todo=>{
      res.render('edit',{title:`User ${user.email} Todo: Id ${todo.id}`,'user':user,'todo':todo})
    })
  })
  .catch(err => {
    console.log(err);
  })
})

router.post('/edit/:idA/:idB',(req,res)=>{
  db.Todo.update({
    title:req.body.title
  },{
    where:{
      id:req.params.idB
    }
  })
  .then(function(){
    res.redirect(`/users/${req.params.idA}`)
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/completion/:idA/:idB',(req,res)=>{
  db.Todo.findById(req.params.idB)
  .then(todo=>{
    if(todo.is_complete == false){
      db.Todo.update({is_complete:true},{where:{'id': req.params.idB}})
      .then(function(){
        res.redirect(`/users/${req.params.idA}`)
      })
    } else {
      db.Todo.update({is_complete:false},{where:{'id': req.params.idB}})
      .then(function(){
        res.redirect(`/users/${req.params.idA}`)
      })
    }
  })
  .catch(err => {
    console.log(err);
  })
})

router.get('/delete/:idA/:idB',(req,res)=>{
  db.Todo.destroy({where:{'id': req.params.idB}})
  .then(function(){
    res.redirect(`/users/${req.params.idA}`)
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
