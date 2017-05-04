var graphql = require('graphql');
var mod = require('./models');

const Event = {
    type: mod.EventType,
    args: {
        id: {
            name: 'id',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve (root, args, req) {
        return mod.EventModel
            .findById(args.id)
            .exec()
    }
};

const Events = {
    type: new graphql.GraphQLList(mod.EventType),
    args: {},
    resolve (root, args, req) {
        return mod.EventModel
            .find()
            .exec()
    },
};

module.exports= {
    Event: Event,
    Events: Events,
}