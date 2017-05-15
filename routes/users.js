var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.post('/create',(req,res,next)=>{
  db.User.create({
    name:req.body.name,
    email:req.body.email
  })
  .then((data)=>{
    res.redirect(`/`)
  })
})

router.post('/login',(req,res,next)=>{
  res.redirect(`/todo/list/${req.body.email}`)
})

module.exports = router;
