const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

var schema = new Schema({
    username: {
        type: "String",
        unique: true,
        required: true
    },
    hashedPassword: {
        type: "String",
        required: true
    },
    salt: {
        type: "String",
        required: true
    },
    created: {
        type: Date,
        default: Date.now
    }
});



schema.methods.encryptPassword = function (password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex')
};

schema.virtual('password')
    .set(function(password){
        this._plainPassword = password;
        this.salt = Math.random() + '';
        this.hashedPassword = this.encryptPassword(password);
    })
    .get(()=>_this._plainPassword);

schema.methods.checkPassword = (password)=> this.encryptPassword(password) === this.hashedPassword;

module.exports = mongoose.model('User',schema);