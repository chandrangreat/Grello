var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
    name: String,
    list_id: String,
    card_id: Array
});

mongoose.model('list', ListSchema);