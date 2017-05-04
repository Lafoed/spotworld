var graphql = require('graphql');
var mod = require('./models');

const User = {
    type: mod.UserType,
    args: {
        id: {
            name: 'id',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve (root, args, req) {
        return mod.UserModel
            .findById(root.get('profile_id')||args.id)
            .exec()
    }
};

const Users = {
    type: new graphql.GraphQLList(mod.UserType),
    args: {},
    resolve (root, args, req) {
        return mod.UserModel
            .find()
            .exec()
    }
};

module.exports= {
    User: User,
    Users: Users,
}