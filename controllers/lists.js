var shortId = require('shortid');
require('../models/index.js');
var mongoose = require('mongoose');
var Board = mongoose.model('board'),
    list = {};

list.add = (params,cb) => {
    params["listId"] = shortId.generate();
    Board.findOneAndUpdate({ "shortId": params.boardId },{ $push: { "lists" : { "listName": params.listName, "listId": params.listId } } }, (err, data) => {
        if(err) cb(err, null);
        else {
            let data ={
                'listName': params.listName,
                'listId': params.listId
            };
            cb(null, data);
        }
    });
};

module.exports = list;