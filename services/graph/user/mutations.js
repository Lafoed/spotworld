var graphql = require('graphql');

var mod = require('./models');

const UserCreate = {
    type: graphql.GraphQLBoolean,
    args:{
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(mod.UserInput)
        }
    },
    async resolve (root,args, req) {
        const userModel = new mod.UserModel(args.data);
        const newUser = await userModel.save();

        if(!newUser) {
            throw new Error('Error create new user')
        }
        return true
    }
};

module.exports = {
    UserCreate: UserCreate
}