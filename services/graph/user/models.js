var graphql = require('graphql');
var db = require('../../db');

// var EventQ = require('../event/queries');

const UserModel = db.model('User');

var UserType = new graphql.GraphQLObjectType({
    name: 'User',
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
        },
        // events:EventQ.Events

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

module.exports={
    UserModel:UserModel,
    UserType:UserType,
    UserInput:UserInput,
}