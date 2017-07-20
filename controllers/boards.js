require('../models/index.js');
var mongoose = require('mongoose');
var Board = mongoose.model('board'),
    board = {};

board.add = (params, cb) => {
    console.log('Inside controller param : '+ params);
    Board.create(params, function(err,id){
        if(err) cb(err, null);
        else cb(null, id);
    });
}

module.exports = board;