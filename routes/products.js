var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Product = require('../models/Product.js');

router.get('/', function (req, res, next) {
	Product.find(function (err, data) {
		if (err) return next(err);
		res.json({ message: 'OK', data });
	});
});

router.get('/:id', function (req, res, next) {
	Product.findById(req.params.id, function (err, data) {
		if (err) return next(err);
		res.json({ message: 'OK', data });
	});
});

router.post('/', function (req, res, next) {
	if (req.body.serverKey === 'tuoilzphaduoctao123') {
		const formData = {
			name: req.body.name,
			image: req.body.image,
			category: req.body.category,
			category_child: req.body.category_child,
			code: req.body.code,
			price: req.body.price,
			sale_off: req.body.sale_off,
			is_out_stock: req.body.is_out_stock
		};
		Product.create(formData, function (err, data) {
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
			name: req.body.name,
			image: req.body.image,
			category: req.body.category,
			category_child: req.body.category_child,
			code: req.body.code,
			price: req.body.price,
			sale_off: req.body.sale_off,
			is_out_stock: req.body.is_out_stock
		};
		Product.findByIdAndUpdate(req.params.id, formData, function (err, data) {
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
		Product.findByIdAndRemove(req.params.id, req.body, function (err, data) {
			if (err) return next(err);
			res.json({ message: 'OK' });
		});
	} else res.json({ message: 'serverKey invalid' });
});

module.exports = router;
