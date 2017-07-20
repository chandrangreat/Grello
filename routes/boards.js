var express = require('express');
var router = express.Router();
var controller = require('../controllers');

router.post('/', function (req, res, next){
    console.log(req.body);
    controller.board.add(req.body, (err, data) => {
        if(!err) res.send(data);
        else next(err);
    });
});

module.exports = router;