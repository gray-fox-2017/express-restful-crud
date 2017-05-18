var express = require('express');
var router = express.Router();
var models = require('../models');
const convertDate = require("../helper/convert_date.js").convertDate;

/* GET home page. */
router.get('/', function(req, res, next) {
  models.Todo.findAll()
  .then((posts) =>{
    let newData = posts.map(function(record) {
        record.dataValues.createdAt = convertDate(record.dataValues.createdAt)
        record.dataValues.updatedAt = convertDate(record.dataValues.updatedAt)
        return record
    });
    res.render('todo', {
        data : posts,
        dataPosts : newData
    });
  })
  .catch((err) => {
    console.log(err);
  })
});

router.get('/addtodo' , (req,res,nest)=>{
  res.render('todo_add')
})

router.post('/createtodo', (req,res,next) =>{
  models.Todo.create({
    title : req.body.title,
    memo : req.body.memo,
    user_email : req.body.user_email,
    user_id : req.body.user_id
  })
  .then( ()=>{
    res.redirect('/todo')
  })
})

router.get('/edit/:id', function(req,res,next) {
  models.Todo.find({
    where : {
      id : req.params.id
    }
  })
  .then(function(todos) {
    res.render('todo_edit', {
      data : todos
    })
  })
})

router.post('/update/:id', (req,res,next)=>{
  models.Todo.update({
    title: req.body.title,
    memo: req.body.memo,
    user_email: req.body.user_email,
    user_id: req.body.user_id
  }, {
    where : {
      id : req.params.id
    }
  })
  .then(function() {
    res.redirect('/todo')
  })
})

router.get('/delete/:id', (req,res,next)=>{
  models.Todo.destroy({
    where : {
      id : req.params.id
    }
  })
  .then(function() {
    res.redirect('/todo')
  })
})


module.exports = router;
