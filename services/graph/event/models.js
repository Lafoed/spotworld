var graphql = require('graphql');
var db = require('../../db');

const EventModel = db.model('Event');

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

var EventType = new graphql.GraphQLObjectType({
    name: 'Event',
    fields: {
        _id: {
            type: graphql.GraphQLID
        },
        username: {
            type: graphql.GraphQLString
        },
        profile_id: {
            type: graphql.GraphQLInt
        },
        accessToken: {
            type: graphql.GraphQLString
        }
    }
});

var EventInput = new graphql.GraphQLInputObjectType({
    name: 'EventInput',
    fields: {
        username: {
            type: graphql.GraphQLString
        },
        profile_id: {
            type: graphql.GraphQLInt
        },
        accessToken: {
            type: graphql.GraphQLString
        }
    }
});

module.exports={
    EventModel:EventModel,
    EventType:EventType,
    EventInput:EventInput,
}