var express = require('express');
var api = express.Router();
var db = require('../db');

const Event = db.model('Event');
const User = db.model('User');

api.get( '/events', (req,res,next)=>{
    Event.find()
        .then(resp=>res.send(resp))
        .catch(next)
});

api.post( '/events', (req,res,next)=>{
    var newEvent = new Event(req.body);
    newEvent.save()
        .then(resp=>res.send(resp))
        .catch(next)
});

api.put( '/events', (req,res,next)=>{
    Event.find().save()
        .then(resp=>res.send(resp))
        .catch(next)
});

api.get( '/user', ( req, res, next )=>{
    if ( req.user ) res.json( req.user );
    else next();
});

api.get( '/users/:_id', (req,res,next)=>{
    User.find(req.params || req.query || {})
        .then(resp=>res.send(resp))
        .catch(next)
});

module.exports = api;