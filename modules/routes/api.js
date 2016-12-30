var express = require('express');
var api = express.Router();

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

module.exports = api;