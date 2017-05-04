var graphql = require('graphql');
var GraphQLDate = require('graphql-date');
var db = require('../../db');

const EventModel = db.model('Event');
var UserQ = require('../user/queries');


var EventType = new graphql.GraphQLObjectType({
    name: 'Event',
    fields: {
        _id: {
            type: graphql.GraphQLID
        },
        coords: {
            type: new graphql.GraphQLList(graphql.GraphQLFloat),
            description:"wow descriptiom"
        },
        profile_id: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        },
        tags: {
            type: new graphql.GraphQLList(graphql.GraphQLString)
        },
        start_time: {
            type: GraphQLDate
        },
        end_time: {
            type: GraphQLDate
        },
        user: UserQ.User
    }
});

var EventInput = new graphql.GraphQLInputObjectType({
    name: 'EventInput',
    fields: {
        coords: {
            type: new graphql.GraphQLList(graphql.GraphQLFloat)
        },
        profile_id: {
            type: graphql.GraphQLString
        },
        title: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        },
        tags: {
            type: new graphql.GraphQLList(graphql.GraphQLString)
        },
        start_time: {
            type: GraphQLDate
        },
        end_time: {
            type: GraphQLDate
        }
    }
});

module.exports={
    EventModel:EventModel,
    EventType:EventType,
    EventInput:EventInput,
}