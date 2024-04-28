var path = require('path');
require('dotenv').config();

//get root directoty of the location where source code is uploaded
const BASEPATH = path.resolve(__dirname, '..');


const controllerPath = BASEPATH + '/src/controller/';



//mysql config for
// const MYSQL_CONFIG = {
//     connectionLimit: 25,
//     host: process.env.MYSQL_HOST || MYSQL_HOST,
//     user: process.env.MYSQL_USER || MYSQL_USER,
//     password: process.env.MYSQL_PASSWORD || MYSQL_PASSWORD,
//     database: process.env.MYSQL_DB || MYSQL_DB,
//     multipleStatements: true
// };

//+++++++++++++++++++++++++++++++++++++++++====SERVER AND DB CONFIGS===++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//--------- DATA_BASE_CONFIG LOCAL FOR PHPMYADMIN ----------------
const DB_CONFIG_MYSQL = {
    user: process.env.DB_USER_LOCAL,
    host: process.env.DB_HOST_LOCAL,
    database: process.env.DATABASE_NAME_LOCAL,
    password: process.env.DB_PASSWORD_LOCAL,
    port: process.env.DB_PORT_LOCAL,
    // max: 20,
    // idleTimeoutMillis: 1000,
    // connectionTimeoutMillis: 1000,
    // maxUses: 7500,
}


//--------- DATA_BASE_CONFIG LOCAL POSTGRES ----------------
const DB_CONFIG_POSTGRES = {
    user: process.env.DB_USER_LOCAL_PG,
    host: process.env.DB_HOST_LOCAL_PG,
    database: process.env.DATABASE_NAME_LOCAL_PG,
    password: process.env.DB_PASSWORD_LOCAL_PG,
    port: process.env.DB_PORT_LOCAL_PG,
    max: 20,
    idleTimeoutMillis: 1000,
    connectionTimeoutMillis: 1000,
    maxUses: 7500,
}



//----------- SERVER CONFIG LOCAL-----------------
const BACKEND_HOST = {
    IP_HOST: `${process.env.BKEND_HOST_NO_SSL_LOCAL}://${process.env.BKEND_IP_LOCAL}:${process.env.BKEND_PORT_LOCAL}`,
    IP_HOST_SSL: `${process.env.BKEND_HOST_SSL_LOCAL}://${process.env.BKEND_IP_LOCAL}:${process.env.BKEND_PORT_LOCAL}`,
    HOST_SSL: `${process.env.BKEND_HOST_SSL_LOCAL}`,
    HOST_NO_SSL: process.env.BKEND_HOST_NO_SSL_LOCAL,
    PORT: process.env.BKEND_PORT_LOCAL,
    IP: `${process.env.BKEND_IP_LOCAL}`,
}


//+++++++++++++++++++++++++++++++++++++++++====SERVER AND DB CONFIGS===++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


const JWT_SECRECTS = {
    jwt_secrects_key: process.env.JWT_SECRECT_KEY || "563125hgvasfeftgasqfghgdvfasf2312312vgvc"
};


const IS_ADMIN = {
    isAdmin: process.env.IS_ADMIN || 'admin'
}
module.exports = {
    controllerPath: controllerPath,
    DB_CONFIG_MYSQL: DB_CONFIG_MYSQL,
    DB_CONFIG_POSTGRES: DB_CONFIG_POSTGRES,
    BACKEND_HOST: BACKEND_HOST,
    JWT_SECRECTS: JWT_SECRECTS,
    IS_ADMIN: IS_ADMIN
}


