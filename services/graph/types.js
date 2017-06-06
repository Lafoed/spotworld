var graphql = require('graphql');
var GraphQLDate = require('graphql-date');

var EventType = new graphql.GraphQLObjectType({
    name: 'Event',
    fields: ()=>({
        _id: {
            type: graphql.GraphQLID
        },
        coords: {
            type: new graphql.GraphQLList(graphql.GraphQLFloat),
            description:"wow descriptiom"
        },
        user_id: {
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
        users: require('./queries').Users
    })
});

var UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: ()=>({
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
        },
        events: require('./queries').Events
    })
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



var UserInput = new graphql.GraphQLInputObjectType({
    name: 'UserInput',
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


module.exports = {
    UserType:UserType,
    EventType:EventType,
    UserInput:UserInput,
    EventInput:EventInput
}