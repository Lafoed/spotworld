var express = require('express');
var api = express.Router();
var db = require('../db');

api.get( '/markers', (req,res,next)=>{

    res.json([{
        coords:{
            lat:55.7702012,
            lng:37.6024752
        },
        title:'first marker',
        description:'very very first marker',
        time:"10.01.2010T10:50"
    }]);
});

api.post( '/createMarker', (req,res,next)=>{

    db.model('User').count()
        .then(resp=>res.send('users count' + resp))
        .catch(err=>{
            console.error(err);
            res.send(500)
        })

    console.log('createMarker');
});

module.exports = api;