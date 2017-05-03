var graphql = require('graphql');
var db = require('../../db');

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

module.exports={
    UserModel:UserModel,
    UserType:UserType,
    UserInput:UserInput,
}