var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/grello', {useMongoClient: true});

var db = mongoose.connection;

db.on('error', function() { 
    console.log('Connection error to MongoDB') 
} );


module.exports = db;