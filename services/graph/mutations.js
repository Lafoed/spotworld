var graphql = require('graphql');
var db = require('../db');
var Types = require('./types');

const EventModel = db.model('Event');
const UserModel = db.model('User');

const EventCreate = {
    type: graphql.GraphQLBoolean,
    args:{
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(Types.EventInput)
        }
    },
    async resolve (root,args, req) {
        const eventModel = new EventModel(args.data);
        const newEvent = await eventModel.save();

        if(!newEvent) {
            throw new Error('Error create new event')
        }
        return true
    }
};

const UserCreate = {
    type: graphql.GraphQLBoolean,
    args:{
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(Types.UserInput)
        }
    },
    async resolve (root,args, req) {
        const userModel = new UserModel(args.data);
        const newUser = await userModel.save();

        if(!newUser) {
            throw new Error('Error create new user')
        }
        return true
    }
}

module.exports= {
    EventCreate: EventCreate,
    UserCreate: UserCreate,
}