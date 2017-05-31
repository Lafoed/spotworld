var graphql = require('graphql');
var db = require('../../db');
var GraphQLDate = require('graphql-date');


const UserModel = db.model('User');
const EventModel = db.model('Event');

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
        events: {
            type: new graphql.GraphQLList(new graphql.GraphQLObjectType({
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
                        type: UserType,
                        resolve(model,args){
                            console.log(model.get('id'));
                            return UserModel.find({user_id:model.get('id')}).exec()
                        }
                    }
                })
            })),
            resolve(model,args){
                return EventModel.find({}).exec()
            }
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