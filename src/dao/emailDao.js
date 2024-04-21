// const dbConn = require('../db_connection');
const { readPool, writePool } = require('../db_connection');
// let resp = await readPool.query(sqlQry, qryArr);


module.exports.store_email_enquiry = async (body) => {
    try {

        let reqDao = body;
        let sqlQry;
        let qryArr = [];
        sqlQry = `INSERT INTO enquiry (enquiryname, enquiryemail, enquirymsg, enquiryat)
                  VALUES ($1,$2,$3,$4);`
        qryArr = [reqDao.name, reqDao.email, reqDao.message, reqDao.currentDateTime];

        const result = await writePool.query(sqlQry, qryArr);
        return result.rowCount;
    }
    catch (err) {
        
        return -500
    }
}