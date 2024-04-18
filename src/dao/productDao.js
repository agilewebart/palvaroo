const dbConn = require('../db_connection');

module.exports.addNewProduct = async (reqBody) => {
    try {

        let req = reqBody;
        let qryArr = [];
        let sqlQry;
        sqlQry = `SELECT * FROM user where status = 1`
        const [dbRes,fields] = await dbConn.connection.execute(sqlQry,qryArr);
        return dbRes;

    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
} 