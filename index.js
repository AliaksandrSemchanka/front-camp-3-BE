const express = require('express');
const app = express();

const blogs = require('./src/routers/blogs');
const logger = require('./logger/logger');

app.set('views', './src/views');
app.set('view engine', 'pug');

app.use((req, res, next) => {
    logger.info(req.method + ' ' + req.url);
    next();
});

app.use('/blogs', blogs);

app.use((req, res) => {
    res.render('index', { title: 'Error', message: 'error 404'})
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
