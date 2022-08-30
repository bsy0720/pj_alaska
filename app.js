var express = require('express');
var cookiePaser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var route = require('./routes/route.js')

var app = express();

app.set('views',path.join(__dirname,'views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.urlencoded({extended : false}));
app.use(cookiePaser());
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',route)

module.exports = app;
