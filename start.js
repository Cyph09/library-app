// Import modules
const mongoose = require('mongoose');

// Import enveronmental variables
require('dotenv').config({path: 'variables.env'});

// Connect to database and handle bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err)=>{
  console.error(err.message);
});

// Import all models

// start app
const app = require('./app');
app.set('port', process.env.PORT || 3300);
const server = app.listen(app.get('port'), ()=>{
  console.log(`App running on PORT ${server.address().port}`);
});