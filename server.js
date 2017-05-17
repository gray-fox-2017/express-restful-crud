const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const user = require('./routes/user');
const todo = require('./routes/todo');

var app = express()

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',index);
app.use('/user',user);
app.use('/todo',todo);








app.listen(3000)
