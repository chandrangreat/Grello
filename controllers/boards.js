require('../models/index.js');
var mongoose = require('mongoose');
var Board = mongoose.model('board'),
    board = {};

board.add = (params) => {
    console.log('Inside controller param : '+ params);
    Board.create(params, function(err,id){
        if(err) throw err;
        else console.log('Created with id: '+id);
    });
}

module.exports = board;