var express = require('express');
var router = express.Router();
const db = require('../models')
var helper = require('../helper/helper')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Express' });
});

router.get('/show', function(req, res, next) {
  db.Memo.findAll({
    include: [
      db.User
    ],
    order: 'id DESC'
  })
  .then(data => {
    res.render('show', { alltodo : data, helper : helper});
  })
  .catch(err => {
    res.send(err);
  })
});
//delete show
router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id
  db.Memo.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })
});

//edit untuk users get dlu
router.get('/edit/:id', function(req, res, next) {
  db.Memo.find({
    where : {
      id : req.params.id
    },
    include : [db.User]
  })
  .then(datas => {
    db.User.findAll()
    .then(user => {
      res.render('edit_show', {data: datas, users: user});
    })
    .catch(err => {
      res.send(err);
    })
  })
  .catch(err => {
    res.send(err);
  })
});

router.post('/edit/:id', function(req, res, next) {
  db.Memo.update({
      title: req.body.title,
      is_complete: req.body.is_complete || false,
      id_user: req.body.id_user
    },{
    where : {
      id : req.params.id
    }
  })
  .then(data => {
    res.redirect('/');
  })
  .catch(err => {
    res.send(err);
  })
})


module.exports = router;
