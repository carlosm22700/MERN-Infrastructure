//require dependencies
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const morgan = require('morgan')

//init express app

const app = express();

//configure settings
require('dotenv').config();
require('./config/database') // this ensures that code from the database.js module runs

//mount middleware
app.use(express.json()); //creates req.body
app.use(morgan('dev'));
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')))
//use middleware to help express discover the favicon file
//use middleware to help express discover the index.html file
app.use(express.static(path.join(__dirname, 'build')))
//Middleware to verify token and assign user obj of payload req.user.
//Be sure to mount before the routes
app.use(require('./config/checkToken'))

//mount routes
//API routes go here
app.use('/api/users', require('./routes/api/users'));

//catch all route - used to always serve index.html
app.get('/*', (req,res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
//tell the app to listen
const port = process.env.PORT || 3001;
app.listen(port, function() {
    console.log(`listening on port:${port}`)
});
