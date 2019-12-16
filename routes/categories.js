var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Category = require('../models/Category');
var CategoryChild = require('../models/CategoryChild');

// Childs

router.get('/child', function (req, res, next) {
    CategoryChild.find(function (err, data) {
        if (err) return next(err);
        res.json({ message: 'OK', data });
    });
});

router.get('/child/:id', function (req, res, next) {
    CategoryChild.findById(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json({ message: 'OK', data });
    });
});

router.post('/child', function (req, res, next) {
    if (req.body.serverKey === 'tuoilzphaduoctao123') {
        const formData = {
            category: req.body.category,
            name: req.body.name
        };
        CategoryChild.create(formData, function (err, data) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json({ message: 'OK' });
        });
    } else res.json({ message: 'serverKey invalid' });
});

router.put('/child/:id', function (req, res, next) {
    if (req.body.serverKey === 'tuoilzphaduoctao123') {
        const formData = {
            category: req.body.category,
            name: req.body.name
        };
        CategoryChild.findByIdAndUpdate(req.params.id, formData, function (err, data) {
            if (err) {
                console.log(err);
                return next(err);
            }
            res.json({ message: 'OK' });
        });
    } else res.json({ message: 'serverKey invalid' });
});

router.delete('/child/:id', function (req, res, next) {
    if (req.body.serverKey === 'tuoilzphaduoctao123') {
        CategoryChild.findByIdAndRemove(req.params.id, req.body, function (err, data) {
            if (err) return next(err);
            res.json({ message: 'OK' });
        });
    } else res.json({ message: 'serverKey invalid' });
});

// Categories

router.get('/', function (req, res, next) {
    Category.find(function (err, data) {
        if (err) return next(err);
        res.json({ message: 'OK', data });
    });
});

router.get('/:id', function (req, res, next) {
    Category.findById(req.params.id, function (err, data) {
        if (err) return next(err);
        res.json({ message: 'OK', data });
    });
});

router.post('/', function (req, res, next) {
    if (req.body.serverKey === 'tuoilzphaduoctao123') {
        const formData = {
            name: req.body.name
        };
        Category.create(formData, function (err, data) {
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
            name: req.body.name
        };
        Category.findByIdAndUpdate(req.params.id, formData, function (err, data) {
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
        Category.findByIdAndRemove(req.params.id, req.body, function (err, data) {
            if (err) return next(err);
            res.json({ message: 'OK' });
        });
    } else res.json({ message: 'serverKey invalid' });
});

module.exports = router;
