var express = require('express');
var app = express();
var config = require('config');



app.use(express.static(__dirname +'/static'));

app.use('/',(req,res,err)=>{
    res.send('hello');
});

app.listen(config.get("port"), ()=>{
    console.log(`App listening on port ${config.get("port")}!`);
    console.log(`http://localhost:${config.get("port")}`);
});