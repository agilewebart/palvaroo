const mysql = require('mysql2');
const db_conf = require('./config');

var pool = mysql.createPool(db_conf.DB_CONFIG);


module.exports.connection = pool.promise();

console.log("Database is connected...");
