const express = require('express');
const path    = require('path');
const indexRouter  = require('./routes/index');
const catalogRouter  = require('./routes/catalog');
const usersRouter  = require('./routes/users');

// Express app
const app = express();

// View engine setup
app.set('views', path.join(__dirname, 'views')); // Views directory
app.set('view engine', 'pug');

// Save up static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware
app.use((req,res,next)=>{
  console.log('Filtered!')
  next();
});

// Use routes
app.use('/', indexRouter);

// app.use('/users', usersRouter)
app.use('/catalog', catalogRouter);

module.exports = app;
