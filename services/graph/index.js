var graphql = require('graphql');

var UserQueries =  require('./user/queries');
var UserMutations = require('./user/mutations');
var EventQueries =  require('./event/queries');
var EventMutations = require('./event/mutations');


module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Queries',
        fields: Object.assign({},UserQueries, EventQueries)
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutations',
        fields: Object.assign({},UserMutations, EventMutations)
    }),
})

