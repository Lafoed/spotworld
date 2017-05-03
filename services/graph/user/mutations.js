var graphql = require('graphql');

var mod = require('./models');



const GUserCreate = {
    type: graphql.GraphQLBoolean,
    args:{
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(mod.GUserInput)
        }
    },
    async resolve (root,args, req) {
        const GuserModel = new mod.GUserModel(args.data);
        const newGUser = await GuserModel.save();

        if(!newGUser) {
            throw new Error('Error create new user')
        }
        return true
    }
};

module.exports = {
    GUserCreate: GUserCreate
}