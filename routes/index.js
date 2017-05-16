var express = require('express');
const db = require('../models');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res, next) => {
  let email = req.body.email
  db.User.create({'email': email})
  .then(() => {
    res.redirect('/')
  })
})

module.exports = router;
