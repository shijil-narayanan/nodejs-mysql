


var mysql = require('mysql');

var pool = mysql.createPool({
    host:'localhost',
    user:'shijil',
    password:'shijilmysql@15',
    database:'ipl',
    connectionLimit:20
})

function executeQuery(query,callback){
    pool.getConnection(function(err,connection){
        if(err) console.log('error in connecting')
        connection.query(query,function(err,rows,fields){
            if(err) console.log(err);
            callback(err,rows);
            connection.release();
        })
    });
}

module.exports = {
    executeQuery:executeQuery
}