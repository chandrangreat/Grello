require('../models/index.js');
var mongoose = require('mongoose');
var Board = mongoose.model('board'),
    card = {};

card.addCard = (params, cb) => {
    console.log(params);
    Board.findOneAndUpdate({ "shortId": params.boardId },{ $push: { "cards" : { "cardName": params.cardName, "listId": params.listId } } }, (err, data) => {
        if(err) cb(err, null);
        else cb(null, data);
    })
}

module.exports = card;

