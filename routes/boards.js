var express = require('express');
var router = express.Router();
var controller = require('../controllers');

router.post('/', function (req, res, next){
    controller.board.add(req.body, (err, data) => {
        if(!err) res.send({success: 'true', data: data});
        else next(err);
    });
});


router.get('/:id', function (req, res, next){
    //console.log(req.params.id);
    controller.board.get(req.params.id, (err, data) => {
        if(!err) res.send({success: 'true', data: data});
        else next(err);
    });
});

router.put('/:id', function (req, res, next) {
    controller.board.edit(req.params.id, req.body, (err, data) => {
        if(!err) res.send({success:'true', data: data});
        else next(err);
    });
});

router.delete('/:id', function (req, res, next) {
    controller.board.delete(req.params.id, (err, data) => {
        if(!err) res.send({success: 'true', data: data});
        else next(err);
    });
});

router.get('/', function (req, res, next) {
    controller.board.getAllBoards((err, data) => {
        if(!err) res.send({success: "true", data: data});
        else next(err);
    });
});

module.exports = router;