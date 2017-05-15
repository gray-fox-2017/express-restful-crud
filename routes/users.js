var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.render('user', {title : express})
// });

// router.get('/', function(req, res, next) {
//   db.mytodos.findAll({
//     include: [
//       db.users
//     ],
//     order: 'id DESC'
//   })
//   .then(datas => {
//     //res.render('todos/todo', { todos:data, helper:helper });
//     res.render('user', {data : datas})
//   })
//   .catch(err => {
//     res.send(err);
//   })
// });

router.get('/', function(req, res, next) {
  db.users.findAll({
    order : 'email asc'
  })
  .then(data => {
    res.render('user', {users:data});
    //res.send(data);
  })
  .catch(err => {
    res.send(err);
  })
});

// router.get('/', (req, res, next) => {
//   db.mytodos.findAll()
//   .then((datas) => {
//     //res.send(datas[0])
//     //console.log(datas);
//     res.render('user', {data : datas})
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//
// })

router.post('/add', (req, res, next) => {
  let title = req.body.title
  let is_complete = req.body.is_complete || false
  let id_user = req.body.id_user
  db.mytodos.create(req.body)
  .then((datas) => {
    console.log("MASUK SINI");
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err.message);
    res.redirect('/s')
  })
})

router.get('/add_user', (req, res, next) => {
  db.users.findAll()
  .then((datas) => {
    //res.send(datas[0])
    //console.log(datas);
    res.render('add_user', {data_user : datas})
  })
  .catch((err) => {
    console.log(err);
  })

})

router.post('/add_user', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  db.users.create(req.body)
  .then((datas) => {
    res.redirect('add_user')
  })
  .catch((err) => {
    console.log(err.message);
    res.redirect('add_user')
  })
})



module.exports = router;
