
var express = require('express');
var userRouter = express.Router();
var userController = require('../models/user')
    
    userRouter.get('/',function(req,res){
        userController.getUsers(function(err,data){
            res.json(data);
        })
    });

module.exports = userRouter;