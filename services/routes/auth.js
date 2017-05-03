var passport = require('../middleware/passport')
var express = require('express');
var auth = express.Router();



auth.use(passport.initialize());
auth.use(passport.session());

auth.get('/auth/vkontakte', passport.authenticate('vkontakte'));

auth.get('/auth/vkontakte/callback',
    passport.authenticate('vkontakte', {
        successRedirect: '/',
        failureRedirect: '/'
    })
);

auth.get('/auth/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = auth;