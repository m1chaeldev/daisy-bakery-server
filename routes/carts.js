var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Cart = require('../models/Cart.js');

router.get('/', function (req, res, next) {
    Cart.find(function (err, data) {
        if (err) return next(err);
        res.json({ message: 'OK', data });
    });
});

router.get('/:id', function (req, res, next) {
    Cart.findById(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json({ message: 'OK', data });
    });
});

router.post('/', function (req, res, next) {
    if (req.body.serverKey === 'tuoilzphaduoctao123') {
        const formData = {
            owner: req.body.owner,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            note: req.body.note,
            cart: req.body.cart,
            total_price: req.body.total_price
        };
        Cart.create(formData, function (err, data) {
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
            owner: req.body.owner,
            name: req.body.name,
            phone: req.body.phone,
            address: req.body.address,
            note: req.body.note,
            cart: req.body.cart,
            total_price: req.body.total_price
        };
        Cart.findByIdAndUpdate(req.params.id, formData, function (err, data) {
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
        Cart.findByIdAndRemove(req.params.id, req.body, function (err, data) {
            if (err) return next(err);
            res.json({ message: 'OK' });
        });
    } else res.json({ message: 'serverKey invalid' });
});

module.exports = router;
