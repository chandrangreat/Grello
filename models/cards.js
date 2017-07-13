var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CardSchema = new Schema({
    name:String,
    card_id: String
});

mongoose.model('card', CardSchema);