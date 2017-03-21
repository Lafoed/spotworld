const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

var schema = new Schema({
    username: {
        type: "String",
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    },
    profile_id: {
        type: Number,
        required: true
    },
    photo: {
        type: "String"
    },
    social: {
        type: "String"
    },
    accessToken: {
        type: "String",
        required: true
    }
});


module.exports = mongoose.model('User',schema);