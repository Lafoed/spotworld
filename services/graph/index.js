var graphql = require('graphql');
var Queries = require('./queries');
var Mutations = require('./mutations');

module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Queries',
        fields: ()=>Queries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutations',
        fields: ()=>Mutations
    }),
})

