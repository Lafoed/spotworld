var graphql = require('graphql');
// var mongoose = require('mongoose');
var db =require('../../db');

const GUserModel = db.model('User');

// const schema = new mongoose.Schema({
//     firstName: {
//         type: String
//     },
//     lastName: {
//         type: String
//     }
// });
//
// var GUserModel = mongoose.model('GUser', schema);

var GUserType = new graphql.GraphQLObjectType({
    name: 'GUser',
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

var GUserInput = new graphql.GraphQLInputObjectType({
    name: 'GUserInput',
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
    GUserModel:GUserModel,
    GUserType:GUserType,
    GUserInput:GUserInput,
}