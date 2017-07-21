var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BoardSchema = new Schema({
    name: {
        type : String,
        required : true
    },
    shortId: {
        type : String,
        required : true
    },
    shortUrl: {
        type : String,
        required : true
    },
    list_id: {
        type : Array,
        required : false
    }
});

mongoose.model('board', BoardSchema);