var graphql = require('graphql');
var queries = require('./queries')



module.exports = new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Queries',
        fields: ()=>queries
    }),
    // mutation: new graphql.GraphQLObjectType({
    //     name: 'Mutations',
    //     fields: ()=>Object.assign({},UserMutations, EventMutations)
    // }),
})

