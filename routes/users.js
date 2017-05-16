var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/',(req,res,next) => {
  db.user.findAll({
    order: 'email asc'
  })
  .then((data) => {
    res.render('user',{users:data});
  })
  .catch((err) => {
    res.render(err);
  })
})


router.post('/create',(req,res,next) => {
  let title = req.body.title
  let is_complete = req.body.is_complete || ''
  let id_user = req.body.id_user

  db.todo.create(req.body)
  .then((data) => {
    // console.log('entry');
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err.message);
    res.redirect('/')
  })
})

router.get('/add',(req,res,next) => {
  db.user.findAll()
  .then((data) => {
    res.render('add',{data_user:data})
  })
  .catch((err) => {
    console.log(err);
  })
})


router.post('/add',(req,res,next) => {
  let name = req.body.name
  let email = req.body.email

  db.user.create(req.body)
  .then((data) => {
    res.redirect('add')
  })
  .catch((err) => {
    console.log(err.message);
  })
})

/////////////////////////////////////////

router.get('/delete_user/:id',(req,res,next) => {
  console.log('masuk');
  let id = req.params.id || ''
  db.user.destroy({
    where: {id:id}
  })
  .then(() => {
    res.redirect('/');
  })
  .catch((err) => {
    res.send(err);
  })
})

router.get('/edit/:id',(req,res,next) => {
  let id = req.params.id || ''
  let name = req.params.name || ''
  let email = req.params.email || ''

  db.user.findById(id)
  .then((data) => {
    res.render('edit',{data_id:data})
  })
  .catch((err) => {
    console.log(err);
  })
})

router.post('/edit/:id',(req,res,next) => {
  let id = req.params.id
  let name = req.body.name || ''
  let email = req.body.email || ''

  db.user.update({
    name: name,
    email: email
    },{ where : {id:id} })
  .then((data) => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err)
  })
})

module.exports = router
