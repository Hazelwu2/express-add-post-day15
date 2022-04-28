const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test');


const indexRouter = require('./routes/index');
const postsRouter = require('./routes/posts');
const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

app.use((err, req, res, next) => {
  console.error('發生未預期的錯誤', err.stack)
  res.status(500).json({
    status: 'error',
    message: '發生未知錯誤' + err
  })
})


module.exports = app;

