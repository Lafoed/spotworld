var express = require('express');
var app = express();
var config = require('config');
var routes = require('./modules/routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
const VKontakteStrategy = require('passport-vkontakte').Strategy;
var passport = require('passport');

app.use(express.static(__dirname +'/static'));
// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json({ type : '*/*' }));
app.use(bodyParser.urlencoded({extended: true}));

// User session support middlewares. Your exact suite might vary depending on your app's needs.
app.use(cookieParser());
app.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new VKontakteStrategy(
    {
        clientID:     5922563, // VK.com docs call it 'API ID', 'app_id', 'api_id', 'client_id' or 'apiId'
        clientSecret: "GSUGxGVeaMe9kW2Uc5vC",
        callbackURL:  "http://localhost:3333"
    },
    function myVerifyCallbackFn(accessToken, refreshToken, params, profile, done) {

        // Now that we have user's `profile` as seen by VK, we can
        // use it to find corresponding database records on our side.
        // Also we have user's `params` that contains email address (if set in
        // scope), token lifetime, etc.
        // Here, we have a hypothetical `User` class which does what it says.
        // User.findOrCreate({ vkontakteId: profile.id })
        //     .then(function (user) { done(null, user); })
        //     .catch(done);
        done();
    }
));

// User session support for our hypothetical `user` objects.
passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id)
        .then(function (user) { done(null, user); })
        .catch(done);
});

app.use('/api', routes.api);

app.use('/',(req,res,err)=>{
    res.send('the last route /');
});

app.listen(config.get("port"), ()=>{
    console.log(`App listening on port ${config.get("port")}!`);
    console.log(`http://localhost:${config.get("port")}`);
});