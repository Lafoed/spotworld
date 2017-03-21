const VKontakteStrategy = require('passport-vkontakte').Strategy;
var passport = require('passport');
var db = require('../db');
var config = require('config');

const User = db.model('User');

passport.use(new VKontakteStrategy(
    {
        clientID:     config.get("auth.clientID"),
        clientSecret: config.get("auth.clientSecret"),
        callbackURL:  config.get("auth.callbackURL")
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {
        //here we validate user and send him next by done
        var bodyToSave = {
            username: profile.displayName,
            profileId: profile.id,
            photo: profile.photos[0].value,
            accessToken: accessToken,
            social:'vkontakte'
        }
        User.updateOne({profile_id:profile.id},{$set:bodyToSave},{upsert:true} )
            .then(user=>{
                done( null, bodyToSave )
            })
            .catch(done);
    }
));

// 1.serializeUser determines, which data of the user object should be stored in the session.
// The result of the serializeUser method is attached to the session as req.session.passport.user = {}
passport.serializeUser(function(user, done) {
    done(null, user);
});

// The first argument of deserializeUser corresponds to the key of the user object that was given to the done function (see 1.).
// So your whole object is retrieved with help of that key.
// In deserializeUser that key is matched with the in memory array / database or any data resource.
// The fetched object is attached to the request object as req.user
passport.deserializeUser(function(profile, done) {
    User.findOne({profile_id:profile.profileId,social:profile.social}).exec()
        .then(function (user) {
            done(null, user.toJSON());
        })
        .catch(done);
});

module.exports = passport;