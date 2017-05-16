var express = require('express');
var router = express.Router();
const db = require('../models')
var helper = require('../helper/helper')


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('data', { title: 'Express' });
// });

router.get('/show',(req, res, next) => {
  db.todo.findAll({
    include: [db.user],
    order: 'id DESC'
  })
  .then(data => {
    // console.log('anjakjbk');
    res.render('show', { alltodo : data});
  })
  .catch(err => {
    console.log(err);;
  })
});
//delete show
router.get('/delete/:id',(req,res,next)=>{
  let id = req.params.id
  db.todo.destroy({
    where : {id : id}
  })
  .then(() => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })
});

//edit untuk users get dlu
router.get('/edit/:id',(req, res, next) => {
  db.todo.find({
    where : {id : req.params.id},
    include : [db.user]
  })
  .then(datas => {
    db.user.findAll()
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

router.post('/edit/:id',(req, res, next) => {
  db.todo.update({
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
