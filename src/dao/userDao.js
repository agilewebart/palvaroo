const { readPool, writePool } = require('../db_connection');


module.exports.userLogIn = async (body) => {
    try {

        let req = body;
        let qryArr = [];
        let sqlQry = "";

        qryArr = [req.userPhone, req.userPass];
        sqlQry = `SELECT * FROM users WHERE phone = $1 AND  password = $2`;
        const result = await readPool.query(sqlQry, qryArr);
        return result;

    } catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
}