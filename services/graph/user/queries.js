var graphql = require('graphql');
var mod = require('./models');

const User = {
    type: mod.UserType,
    args: {
        id: {
            name: 'id',
            type: graphql.GraphQLID
        }
    },
    resolve (root, args, req) {
        var id = root.get('user_id') || args.id
        if ( id ) throw 'no avalible profile id'
        return mod.UserModel
            .findById( id )
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