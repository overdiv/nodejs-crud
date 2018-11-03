var express = require('express');
var router = express.Router();
var User = require('../models').User;


// USER GET /users => 모든 사용자 정보를 json 형태로 화면에 출력
router.get('/', function (req, res, next) {
	User.findAll()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
});

// USER POST /users => 사용자 등록
router.post('/', function (req, res, next) {
	User.create({
			name: req.body.name,
			age: req.body.age,
			married: req.body.married,
		})
		.then((result) => {
			console.log(result);
			res.status(201).json(result);
		})
		.catch((err) => {
			console.error(err);
			next(err);
		})
});

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.send('respond with a resource');
});

module.exports = router;