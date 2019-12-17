var express = require('express');
var router = express.Router();
var User = require('../models/User');

router.get('/', function (req, res, next) {
	User.find(function (err, data) {
		if (err) return next(err);
		res.json({ message: 'OK', data });
	});
});

router.get('/:id', function (req, res, next) {
	const formData = {
		id: req.params.id
	};
	User.findOne(formData, function (err, data) {
		if (err) return next(err);
		res.json({ message: 'OK', data });
	});
});

router.post('/', function (req, res, next) {
	if (req.body.serverKey === 'tuoilzphaduoctao123') {
		const formData = {
			id: req.body.id,
			name: req.body.name,
			phone: '',
			address: ''
		};
		User.create(formData, function (err, data) {
			if (err) {
				console.log(err);
				return next(err);
			}
			res.json({ message: 'OK' });
		});
	} else res.json({ message: 'serverKey invalid' });
});

router.put('/:id', function (req, res, next) {
	if (req.body.serverKey === 'tuoilzphaduoctao123') {
		const formData = {
			id: req.body.id,
			name: req.body.name,
			phone: req.body.phone,
			address: req.body.address
		};
		User.findByIdAndUpdate(req.params.id, formData, function (err, data) {
			if (err) {
				console.log(err);
				return next(err);
			}
			res.json({ message: 'OK' });
		});
	} else res.json({ message: 'serverKey invalid' });
});

router.delete('/:id', function (req, res, next) {
	if (req.body.serverKey === 'tuoilzphaduoctao123') {
		User.findByIdAndRemove(req.params.id, req.body, function (err, data) {
			if (err) return next(err);
			res.json({ message: 'OK' });
		});
	} else res.json({ message: 'serverKey invalid' });
});

module.exports = router;
