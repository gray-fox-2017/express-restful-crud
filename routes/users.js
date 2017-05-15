var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/', function(req, res, next) {
  db.User.findAll({
    order : 'email asc'
  })
  .then(data => {
    res.render('user', {users:data});
  })
  .catch(err => {
    res.send(err);
  })
});

router.post('/create', (req, res, next) => {
  let title = req.body.title
  let is_complete = req.body.is_complete || false
  let id_user = req.body.id_user
  db.Memo.create(req.body)
  .then((datas) => {
    console.log("MASUK SINI");
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err.message);
    res.redirect('/')
  })
})

router.get('/add', (req, res, next) => {
  db.User.findAll()
  .then((datas) => {
    res.render('add', {data_user : datas})
  })
  .catch((err) => {
    console.log(err);
  })

})

router.post('/add', (req, res, next) => {
  let name = req.body.name
  let email = req.body.email
  db.User.create(req.body)
  .then((datas) => {
    res.redirect('add')
  })
  .catch((err) => {
    console.log(err.message);
    res.redirect(err)
  })
})


//delete untuk user
router.get('/delete_user/:id', function(req, res, next) {
  console.log("MASUK");
  let id = req.params.id || ''
  db.User.destroy({
    where : {
      id : id
    }
  })
  .then(() => {
    res.redirect('/');
  })
  .catch(err => {
    res.send(err);
  })
});

//edit untuk users get dlu
router.get('/edit/:id',(req,res,next)=>{
  let id = req.params.id || ''
  let name = req.params.name || ''
  let email = req.params.email || ''
  db.User.findById(id)
  .then((datas) => {
    res.render('edit', {data : datas})
  })
  .catch((err) => {
    console.log(err);
  })
});
//edit untuk users -> post
router.post('/edit/:id',(req,res,next)=>{
  let id = req.params.id
  let name = req.body.name || ''
  let email = req.body.email || ''
  db.User.update({
      name : name,
      email : email
    },
    { where :
        {
          id : id
        }
  })
  .then((datas) => {
    res.redirect('/')
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;
