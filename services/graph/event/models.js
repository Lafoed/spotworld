var graphql = require('graphql');
var GraphQLDate = require('graphql-date');
var db = require('../../db');

const EventModel = db.model('Event');
var UserModels = require('../user/models');


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
        user: {
            type: UserModels.UserType,
            resolve(model,args){
                console.log(model.get('id'));
                return UserModels.UserModel.find({user_id:model.get('id')}).exec()
            }
        }
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

module.exports={
    EventModel:EventModel,
    EventType:EventType,
    EventInput:EventInput,
}