var express = require('express');
var router = express.Router();
var controller = require('../controllers');

router.post('/', function(req, res, next) {
    controller.list.add(req.body, (err,data) => {
        if(!err) res.send({success:true, data: data});
        else next(err);
    });
});

router.put('/:boardId', function(req, res, next){
    controller.list.edit(req.params, req.body, (err, data) => {
        if(!err) res.send({success: true, data: data});
        else next(err);
    });
});

router.delete('/:boardId/:listId', function(req, res, next) {
    controller.list.delete(req.params, (err, data) => {
        if(!err) res.send({success: true, data: data});
        else next(err);
    });
});

module.exports = router;