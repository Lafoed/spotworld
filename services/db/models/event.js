const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var schema = new Schema({
    coords: {
        type: ["Number"],
        required: true
    },
    profile_id: {
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


module.exports = mongoose.model('Event',schema);
