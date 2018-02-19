const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


const blogs = require('./src/routers/blogs/blogs');
const users = require('./src/routers/users/users');
const logger = require('./logger/logger');
const isAuthenticated = require('./src/passport/isAuth');
const passportInit = require('./src/passport/init');

const app = express();
mongoose.connect('mongodb://localhost:27017/blogs');

app.set('views', './src/views');
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use(flash());
app.use((req, res, next) => {
  logger.info(`${req.method} ${req.url}`);
  next();
});

app.use(session({ secret: 'magic' }));
app.use(passport.initialize());
app.use(passport.session());
passportInit(passport);

app.use('/blogs', isAuthenticated, blogs);
app.use('/users', users);

app.use((req, res) => res.render('index', { title: 'Error', message: 'error 404' }));

app.use((err, req, res) => {
  res.status(500).send({ error: err });
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});
