var cookieParser = require('cookie-parser');
// app.use(cookieParser());

 var express = require('express');
 var app=express();
 app.use(cookieParser());
 app.get('/', function (req,res){
 res.cookie('name', 'express').send('cookie has been set');

 });
app.listen(5000);