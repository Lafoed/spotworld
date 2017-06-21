var Parse = require('parse/node');
Parse.initialize("spotwolrdappid");
Parse.serverURL = 'https://spotworld.dimkk.ru/parse';


var { events } = require( './data' );
var User = Parse.Object.extend( "User" );
var user = new Parse.Query( User );
var point = new Parse.GeoPoint( { latitude:40.0, longitude:-30.0 } );
console.log( point );
// console.log(events);

events
    .map( event => Object.assign(
        event,
        { coords:new Parse.GeoPoint( event.coords ) },
        {relatedUser:User}
    ) )
    .forEach( data=> {
        var Event = Parse.Object.extend( "Event" );
        var event = new Event( data );
        event.save().then( console.log, console.error )
    } )

// user.get('YvOnNY05sY').then(
//     User=>{
//         console.log(User);
//
//     },
//     err=>{
//         console.log(err);
//     }
// )





