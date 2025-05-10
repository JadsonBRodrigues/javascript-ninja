(function () {

'use strict';


var express = require('express');
var router = express.Router();

var cars = [];

router.route('/')
  .get(function (req, res) {
    res.json(cars);
  })
  .post(function (req, res) {
    cars.push(req.body);
    res.json({ message: 'Carro cadastrado com sucesso!' });
  });

module.exports = router;
}) ();