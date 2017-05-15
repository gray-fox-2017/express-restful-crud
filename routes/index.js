var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Todo App' });
});

router.get('/login',(req,res,next)=>{
  res.render('Users/login')
})

router.get('/signup',(req,res,next)=>{
  res.render('Users/signup')
})

module.exports = router;
