var express = require('express');
var app = express();
var config = require('config');
var routes = require('./services/routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var compression = require('compression');
var fs = require('fs');

var GraphSchema = require('./services/graph');
var graphqlHTTP = require('express-graphql');



var https = require('https');
var http = require('http');


// var privateKey = fs.readFileSync( './static/privatekey.pem' );
// var certificate = fs.readFileSync( './static/certificate.pem' );

console.log("mode: "+process.env.NODE_ENV);
//TODO make some middleware block
app.use(express.static(__dirname +'/static'));
app.use(bodyParser.json({ type : '*/*' }));
app.use(bodyParser.urlencoded({extended: true}));
app.use(compression());
app.use(cookieParser());
app.use(session({secret:'keyboard cat', resave: true, saveUninitialized: true}));

// app.use('/', routes.auth);
// app.use('/api', routes.api);

// app.use('/graphql', graphqlHTTP({
//     schema: GraphSchema,
//     graphiql: true
// }));

app.listen(config.get("port"), ()=>{
    console.log(`App listening on port ${config.get("port")}!`);
    console.log(`http://localhost:${config.get("port")}`);
});

console.log(`App listening on port ${config.get("port")}!`);
var privateKey = fs.readFileSync( './sslforfree/private.key' );
var certificate = fs.readFileSync( './sslforfree/certificate.crt' );

// https.createServer({
//     key: privateKey,
//     cert: certificate
// }, app).listen(config.get("port"));

// https.createServer({
//     key: privateKey,
//     cert: certificate
// }, app).listen(config.get("porthttp"));

// http.createServer(app).listen(80);
// https.createServer(options, app).listen(config.get("port"));