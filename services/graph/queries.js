var graphql = require('graphql');

var db = require('../db');

const EventModel = db.model('Event');
const UserModel = db.model('User');

var Types = require('./types');

const Event = {
    type: Types.EventType,
    args: {
        id: {
            name: 'id',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve (root, args, req) {
        return EventModel
            .findById(args.id)
            .exec()
    }
};

const Events = {
    type: new graphql.GraphQLList(Types.EventType),
    args: {},
    resolve (root, args, req) {
        return EventModel
            .find()
            .exec()
    },
};


const User = {
    type: Types.UserType,
    args: {
        id: {
            name: 'id',
            type: graphql.GraphQLID
        }
    },
    resolve (root, args, req) {
        return UserModel
            .findById( args.id )
            .exec()
    }
};

const Users = {
    type: new graphql.GraphQLList(Types.UserType),
    args: {},
    resolve (root, args, req) {
        return UserModel
            .find()
            .exec()
    }
};

module.exports= {
    User: User,
    Users: Users,
    Event: Event,
    Events: Events,
}


