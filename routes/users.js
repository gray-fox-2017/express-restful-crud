var express = require('express');
var router = express.Router();
const db = require('../models');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  let id = req.params.id
  db.Todo.findAll({
    include: [{ model: db.User }],
    where: {'id': id }
  })
  .then((todos) => {
    res.render('users', {data: todos});
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;
