var express = require('express');
var auth = express.Router();

var passport = require('../middleware/passport');

auth.get('/vkontakte', passport.authenticate('vkontakte'));

auth.get('/vkontakte/callback',
    passport.authenticate('vkontakte', {
        successRedirect: '/',
        failureRedirect: '/'
    })
);

auth.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
});

module.exports = auth;