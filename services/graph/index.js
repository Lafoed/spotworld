var graphql = require('graphql');

var GUserQueries =  require('./user/queries');
var GUserMutations = require('./user/mutations');


module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Queries',
        fields: GUserQueries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutations',
        fields: GUserMutations
    }),
})

