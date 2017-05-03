var graphql = require('graphql');

var UserQueries =  require('./user/queries');
var UserMutations = require('./user/mutations');


module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Queries',
        fields: UserQueries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutations',
        fields: UserMutations
    }),
})

