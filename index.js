const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');


const blogs = require('./src/routers/blogs/blogs');
const logger = require('./logger/logger');
const passportInit = require('./src/passport/init');

const app = express();
mongoose.connect('mongodb://localhost:27017/blogs');

app.set('views', './src/views/signin');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(cookieParser());
app.use(flash());
app.use((req, res, next) => {
    logger.info(req.method + ' ' + req.url);
    next();
});

app.use(session({secret: 'magic'}));
app.use(passport.initialize());
app.use(passport.session());
passportInit(passport);

app.use('/blogs', blogs);

app.use((req, res) => {
    res.render('index', { title: 'Error', message: 'error 404'})
});

app.use((err, req, res, next) => {
    res.status(500).send({error: err})
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
