var express = require('express');
var router = express.Router();
let db = require('../models')
/* GET home page. */
let title = 'ADK Todo'

router.get('/', function(req, res) {
  db.User.findAll()
  .then(users => {
    res.render('index', {title:`${title}`,'users': users})
  })
  .catch(err => {
    console.log(err);
  })
});

router.post('/',function(req,res){
  db.User.create(req.body)
  .then(user => {
    title = 'ADK Todo'
    res.redirect('/')
  })
  .catch(err => {
    // if(title=='ADK Todo'){
      title='ADK Todo - '+err.message;
    // }
    res.redirect('/')
  });
})

module.exports = router;
