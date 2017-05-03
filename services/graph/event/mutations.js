var graphql = require('graphql');

var mod = require('./models');

const EventCreate = {
    type: graphql.GraphQLBoolean,
    args:{
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(mod.EventInput)
        }
    },
    async resolve (root,args, req) {
        const eventModel = new mod.EventModel(args.data);
        const newEvent = await eventModel.save();

        if(!newEvent) {
            throw new Error('Error create new event')
        }
        return true
    }
};

module.exports = {
    EventCreate: EventCreate
}