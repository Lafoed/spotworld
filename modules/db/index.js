const mongoose = require("mongoose");
const log = require("winston");
const config = require("config");

const User = require("./models/user");
const Marker = require("./models/marker");

mongoose.connection.on('open', () => {
    log.info('Connected to mongo server!');
});

mongoose.connection.on('error', err => {
    log.error('Could not connect to mongo server!');
    log.error(err.message);
});

mongoose.Promise = global.Promise;
module.exports = mongoose.connect( config.get("mongoose.url_local"), config.get("mongoose.options")  );

