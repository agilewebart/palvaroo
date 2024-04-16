const dbConn = require('../db_connection');

module.exports.addNewProduct = async (reqBody) => {
    try {

        let req = reqBody;
        console.log("------------->>> ",req);
    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
} 