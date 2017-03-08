var express = require('express');
var app = express();
var config = require('config');
var routes = require('./modules/routes');


app.use(express.static(__dirname +'/static'));

app.use('/api', routes.api);

app.use('/',(req,res,err)=>{
    res.send('the last route /');
});

app.listen(config.get("port"), ()=>{
    console.log(`App listening on port ${config.get("port")}!`);
    console.log(`http://localhost:${config.get("port")}`);
});