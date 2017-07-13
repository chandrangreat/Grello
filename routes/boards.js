var express = require('express');
var router = express.Router();
var controller = require('../controllers');

router.post('/', function (req, res, next){
    console.log(req.body);
    controller.board.add(req.body);
});

module.exports = router;