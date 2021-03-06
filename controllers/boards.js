var shortid = require('shortid');
require('../models/index.js');
var mongoose = require('mongoose');
var Board = mongoose.model('board'),
    board = {};

board.add = (params, cb) => {

    params["shortId"] = localShortId = shortid.generate();
    params["shortUrl"] = '/b/' + localShortId + '/' + params.name.toLowerCase().replace(' ', '-').replace('_', '');

    Board.create(params, function(err,id){
        if(err) cb(err, null);
        else cb(null, id);
    });
};

board.getAllBoards = (cb) => {
    Board.find({},{name: 1, shortId: 1, shortUrl: 1}, function(err, data) {
        if(err) cb(err, null);
        else cb(null, data);
    });
}

board.get = (params, cb) => {
    Board.findOne({'shortId': params}, function(err, data){
        if(err) cb(err, null);
        else cb(null, data);
    });
};

board.edit = (params, body, cb) => {
    body["shortUrl"] = '/b/' + params + '/' + body.name.toLowerCase().replace(' ', '-').replace('_', '').replace('/','-');    
    Board.findOneAndUpdate({'shortId': params}, body ,{ new: true },function(err, data){
        if(err) cb(err, null);
        else cb(null, data);
    });
};

board.delete = (params, cb) => {
    Board.findOneAndRemove({'shortId': params}, function(err, data){
        if(err) cb(err, null);
        else cb(null, data);
    });
};


module.exports = board;