
var express = require('express'),
    mysql = require('mysql'),
    bodyParser = require('body-parser'),
    connection = require('express-myconnection'),
    expressValidator = require('express-validator'),
    path= require('path'),
    app = express(),
    userRouter = require('./routes/user');


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(expressValidator());


app.use('/user',userRouter);
app.listen(8080,function(){
    console.log('server is running on 8080')
})