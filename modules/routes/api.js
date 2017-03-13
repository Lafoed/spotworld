var express = require('express');
var api = express.Router();
var db = require('../db');

const Marker = db.model('Marker');

api.get( '/marker', (req,res,next)=>{

    Marker.find()
        .then(resp=>res.send(resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

api.post( '/marker', (req,res,next)=>{
    var newMarker = new Marker(req.body);
    newMarker.save()
        .then(resp=>res.send(resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

api.put( '/marker', (req,res,next)=>{

    Marker.find().save()
        .then(resp=>res.send(resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

api.delete( '/marker', (req,res,next)=>{

    Marker.delete()
        .then(resp=>res.send('users count' + resp))
        .catch(err=>{
            console.error(err);
            res.send(404)
        })
});

module.exports = api;