// import modules
var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
var session = require('express-session');
var flash = require('connect-flash');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// connect database
mongoose.connect(process.env.MONGO_DB);
var db = mongoose.connection;
db.once("open", function(){
  console.log("DB Connected!");
});
db.on("error", function(err){
  console.log("DB Error : " + err);
});

// view setting
app.set("view engine", 'ejs');

// set middlewares
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(flash());
app.use(session({secret:'thisissecretkey'}));

var passport = require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());

// start server
app.listen(15075, function(){
  console.log('Server On!');
});
