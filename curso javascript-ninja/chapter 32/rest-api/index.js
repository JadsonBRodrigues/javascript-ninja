 
 'use strict';

 var express = require ('express');
 var cors = require ('cors');
 var bodyParse = require ('body-parser');
 var app = express ();

var users = [{
    username: 'joao',
    name: 'João',
    age: 30
}, {
    username: 'maria',
    name: 'Maria',
    age: 22
}];

 app.use(bodyParse.urlencoded({extended:false}));
 app.use(cors());

 app.get ('/', function (req, res) {
    res.send ('<h1> Home </h1>');
 });

 app.get ('/user', function (req, res) {
    res.send ('User');
 });

 app.get ('/user/:username', function (req, res) {
    var username = req.params.username;
    var hasUser = users.some(function (user) {
        return user.username === username});
    if (hasUser) {
        return res.json(users.filter(function (user) 
        {return user.username === username;
    }));
    }
    res.status(404).json({error: 'Usuário não encontrado'});
 });

 app.post ('/user', function (req, res) {
    var username = req.body.username;
    var age = req.body.age;
    var user = req.body.user;
    var hasUser = users.some(function (user) {
        return user.username === username});
    if (hasUser) {
        return res.json(users);
    }
    users.push ({
        username: username,
        age: age,
        user: user
    });
        res.json (users);
 });
 
 app.listen (3000);
 