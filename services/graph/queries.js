var graphql = require('graphql');
var GraphQLDate = require('graphql-date');
var db = require('../db');
const EventModel = db.model('Event');
const UserModel = db.model('User');


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
        users: Users
    })
});

var UserType = new graphql.GraphQLObjectType({
    name: 'User',
    fields: ()=>({
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
        events: Events
    })
});


const Event = {
    type: EventType,
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
    type: new graphql.GraphQLList(EventType),
    args: {},
    resolve (root, args, req) {
        return EventModel
            .find()
            .exec()
    },
};





const User = {
    type: UserType,
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
    type: new graphql.GraphQLList(UserType),
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

// var EventInput = new graphql.GraphQLInputObjectType({
//     name: 'EventInput',
//     fields: {
//         coords: {
//             type: new graphql.GraphQLList(graphql.GraphQLFloat)
//         },
//         profile_id: {
//             type: graphql.GraphQLString
//         },
//         title: {
//             type: graphql.GraphQLString
//         },
//         description: {
//             type: graphql.GraphQLString
//         },
//         tags: {
//             type: new graphql.GraphQLList(graphql.GraphQLString)
//         },
//         start_time: {
//             type: GraphQLDate
//         },
//         end_time: {
//             type: GraphQLDate
//         }
//     }
// });

// const EventCreate = {
//     type: graphql.GraphQLBoolean,
//     args:{
//         data: {
//             name: 'data',
//             type: new graphql.GraphQLNonNull(mod.EventInput)
//         }
//     },
//     async resolve (root,args, req) {
//         const eventModel = new mod.EventModel(args.data);
//         const newEvent = await eventModel.save();
//
//         if(!newEvent) {
//             throw new Error('Error create new event')
//         }
//         return true
//     }
// };

// var UserInput = new graphql.GraphQLInputObjectType({
//     name: 'UserInput',
//     fields: {
//         username: {
//             type: graphql.GraphQLString
//         },
//         profile_id: {
//             type: graphql.GraphQLInt
//         },
//         accessToken: {
//             type: graphql.GraphQLString
//         }
//     }
// });
//
//
//
//
// const UserCreate = {
//     type: graphql.GraphQLBoolean,
//     args:{
//         data: {
//             name: 'data',
//             type: new graphql.GraphQLNonNull(mod.UserInput)
//         }
//     },
//     async resolve (root,args, req) {
//         const userModel = new mod.UserModel(args.data);
//         const newUser = await userModel.save();
//
//         if(!newUser) {
//             throw new Error('Error create new user')
//         }
//         return true
//     }
// };