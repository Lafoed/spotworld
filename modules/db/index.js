const mongoose = require("mongoose");
const log = require("winston");
const config = require("config")
const User = require("./models/user");


mongoose.connection.on('open', () => {
    log.info('Connected to mongo server!');
    var user = new User({username:'wow',password:"hello"});

    user.save()
        .then(()=>{
            console.log(argumerts);
            mongoose.connection.db.dropDatabase(()=>{
                console.log(arguments);
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    // var db = mongoose.connection.db;
    // db.dropDatabase((err)=>{
    //     log.info(err);
    // })
    // mongoose.disconnect();
});

mongoose.connection.on('error', err => {
    log.error('Could not connect to mongo server!');
    log.error(err.message);
});


// mongoose.connect( util.format(this.config.get("db"), this.config.get("user"), this.config.get("pass") ) );
mongoose.connect( config.get("mongoose:url"), config.get("mongoose:options")  );

