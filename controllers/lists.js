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

list.edit = (params, body, cb) => {
    Board.findOneAndUpdate({ "shortId": params.boardId, "lists.listId": body.listId}, {'$set': {
        'lists.$.listName': body.listName
    }}, { new: true }, (err, data) => {
        if(err) cb(err, null);
        else cb(null, data);
    });
};

list.delete = (params, cb) => {
    Board.findOneAndUpdate({ "shortId": params.boardId}, {'$pull': {
     lists: { 'listId': params.listId }   
    }}, { new: true }, (err, data) => {
        if(err) cb(err, null);
        else cb(null, data);
    });
};

module.exports = list;