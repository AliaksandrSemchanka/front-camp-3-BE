const express = require('express');
const passport = require('passport');

const router = express.Router();

router.get('/login', (req, res) => {
    res.render('login', { message: req.flash('message') });
});

router.post('/login', passport.authenticate('auth', {
    successRedirect: '/blogs',
    failureRedirect: '/users/login',
    failureFlash : true
}));

router.get('/signup', (req, res) => {
    res.render('signup', { message: req.flash('message') });
});

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/blogs',
    failureRedirect: '/users/signup',
    failureFlash : true
}));


module.exports = router;