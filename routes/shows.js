var express = require('express');
var router = express.Router();
const db = require('../models')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('data', { title: 'Express' });
});

router.get('/show', function(req, res, next) {
  db.mytodos.findAll({
    include: [
      db.users
    ],
    order: 'id DESC'
  })
  .then(data => {
    res.render('show', { alltodo : data});
  })
  .catch(err => {
    res.send(err);
  })
});


module.exports = router;
