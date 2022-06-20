const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport')
const cookieSession =  require('cookie-session')
const sessions = require('express-session');
const bodyParser = require('body-parser')
const methodOverride = require('method-override')


const authRouter = require('./routes/auth')
const indexRouter = require('./routes/index');
const dashboardRouter = require('./routes/dashboard')


var app = express();


//load env vars
require('dotenv').config();

// connect to mongodb
require('./config/database')
//Config passport
require('./config/passport')

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(methodOverride('_method'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())


app.use(sessions({
  secret:process.env.SESSION_SECRET,
}));
  
app.use(passport.initialize())
app.use(passport.session())
app.use(express.static(path.join(__dirname, 'public')));
  
// use routes
app.use('/', indexRouter);
app.use('/auth',authRouter)
app.use('/dashboard',dashboardRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  console.log(err)
  // render the error page
  res.status(err.status || 500);
  res.send('error');
});

module.exports = app;
