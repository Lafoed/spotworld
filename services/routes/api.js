var express = require('express');
var api = express.Router();
var db = require('../db');

const Event = db.model('Event');

api.get( '/events', (req,res,next)=>{
    Event.find()
        .then(resp=>res.send(resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

api.post( '/events', (req,res,next)=>{
    var newEvent = new Event(req.body);
    newEvent.save()
        .then(resp=>res.send(resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

api.put( '/events', (req,res,next)=>{

    Event.find().save()
        .then(resp=>res.send(resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

api.delete( '/events', (req,res,next)=>{

    Event.delete()
        .then(resp=>res.send('users count' + resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

module.exports = api;