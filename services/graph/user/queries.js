var graphql = require('graphql');
var mod = require('./models');

const GUser = {
    type: mod.GUserType,
    args: {
        id: {
            name: 'id',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve (root, args, req) {
        return mod.GUserModel
            .findById(args.id)
            .exec()
    }
};

const GUsers = {
    type: new graphql.GraphQLList(mod.GUserType),
    args: {},
    resolve (root, args, req) {
        return mod.GUserModel
            .find()
            .exec()
    }
};

module.exports= {
    GUser: GUser,
    GUsers: GUsers,
}