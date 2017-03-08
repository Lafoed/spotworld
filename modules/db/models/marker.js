const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

var schema = new Schema({
    coords: {
        type: ["Number"],
        required: true
    },
    author: {
        type: "String",
        required: true
    },
    description: {
        type: "String",
        required: false
    },
    tags:{
        type:["String"],
        required:false
    },
    start_time: {
        type: Date,
        default: Date.now
    },
    end_time: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Marker',schema);
