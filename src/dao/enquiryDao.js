const { readPool, writePool } = require('../db_connection');

//--------------------- Add new product dao ---------------------------
module.exports.getAllEnquiry = async (reqBody) => {
    try {

        let req = reqBody;
        let qryArr = [];
        let sqlQry;
        qryArr = [req.limit, req.offset]
        sqlQry = `SELECT enquiryname as name , enquiryemail as email ,enquiryphone as phone ,enquiryprod as prod ,enquirymsg as msg ,enquiryat as datetime  FROM enquiry LIMIT $1 OFFSET $2`
        const dbRes = await writePool.query(sqlQry, qryArr);
        return dbRes.rows;

    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
}