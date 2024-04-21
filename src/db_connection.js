// //------------------ MYSQL2/PHPMYADMIN CONFIG --------------------

// const mysql = require('mysql2');
// const db_conf = require('./config');

// var pool = mysql.createPool(db_conf.DB_CONFIG_MYSQL);


// module.exports.connection = pool.promise();

// console.log("Database is connected...");


//------------------ POSTGRESS CONF --------------------
const Pool = require('pg').Pool;
const db_conf = require('./config');


const readPool = new Pool(Object.freeze(db_conf.DB_CONFIG_POSTGRES));
const writePool = new Pool(Object.freeze(db_conf.DB_CONFIG_POSTGRES));

module.exports = {
    readPool,
    writePool
}
console.log("Database is connected...");
