var express = require('express');
var router = express.Router();
const db = require('../models');
const helper = require('../helper/util.js');



router.get('/',(req,res,next)=>{
  db.Todo.findAll({include:{model:db.User}}).then((todos)=>{
    // res.send(JSON.stringify(todos));
    res.render('viewAll2',{todos:todos,helper:helper});
  })
});

router.get('/:id',(req,res,next)=>{
  db.User.findById(req.params.id).then((user)=>{
    user.getTodos()
    .then((todos)=>{
      res.render('viewAll',{todos:todos, id:req.params.id,helper:helper});
    })
  });

})
router.post('/', (req, res, next)=> {
  // res.send('helo');
  db.User.find({where: {email: req.body.txtEmail.trim()}})
  .then((user)=>{
    res.redirect(`/users/${user.id}`)
  }).catch((err)=>{
    res.send('Apaan sih kirim email palsu');
  });
});

//tampilkan form insert
router.get('/insert/:id',(req,res,next)=>{
  res.render('frmInsert',{id:req.params.id});
});

//tampilkan frmEdit
router.get('/edit/:id/:user_id',(req,res,next) => {
  // res.send(req.params.user_id+'_'+req.params.id)
  let uid = parseInt(req.params.user_id);
  let id = parseInt(req.params.id);

  db.Todo.find({where: {user_id: uid , id: id} })
  .then((todo)=>{
    res.render('frmUpdate',{id: todo.id,user_id:uid});
    // res.send('Yipee');
  })
  .catch(err=>{
    res.send('Invalid user'+err);
  })

})

//submit insert
router.post('/insert',(req,res,next)=>{
  db.Todo.create({
    title : req.body.title,
    user_id: req.body.user_id,
    createdAt: new Date(),
    is_complete: 0
  })
  .then(()=>{
    res.redirect(`/users/${req.body.user_id}`);
  }).catch((err)=> res.send('Error, MAMPOS!'+err));
})

//submit edit
router.post('/edit/:id',(req,res,next) => {
  db.Todo.update({title:req.body.title},{where: {id:req.params.id, user_id:req.body.user_id}})
  .then(()=>{
    //redirectpost
    res.redirect(`/users/${req.body.user_id}`);
  }).catch((err)=> res.send('Error, MAMPOS!'+err));
})

router.get('/complete/:id/:user_id',(req,res,next)=>{
  db.Todo.update({is_complete:1},{where: {id:req.params.id}})
  .then(()=>{
    //redirectpost
    res.redirect(`/users/${req.params.user_id}`)
  }).catch((err)=> res.send('Error, MAMPOS!'+err));
})

//lakukan delete
router.get('/delete/:id/:user_id',(req,res,next)=>{
  db.Todo.destroy({where: {id:req.params.id, user_id: req.params.user_id}})
  .then(()=>{
    //redirectpost
    res.redirect(`/users/${req.params.user_id}`)
  }).catch((err)=> res.send('Error, MAMPOS!'+err));
})
module.exports = router;
