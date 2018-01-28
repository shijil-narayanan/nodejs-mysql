
var mysql = require('../db.js');

function getUsers(cb){
    mysql.executeQuery('SELECT * FROM employees',function(err,data){
        cb(err,data);
    });
}


module.exports = {
    getUsers:getUsers
}