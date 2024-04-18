const dbConn = require('../db_connection');


module.exports.store_email_enquiry = async  (body) => {
    try {

        let reqDao = body;
        let sqlQry;
        let qryArr = [];
        sqlQry = `INSERT INTO enquiry (enquiryname, enquiryemail, enquirymsg, enquiryat)
                  VALUES (?,?,?,?);`
        qryArr = [reqDao.name, reqDao.email, reqDao.message, reqDao.currentDateTime];

        const [result, fields] = await dbConn.connection.execute(sqlQry, qryArr);
        return result.affectedRows;
    }
    catch (err) {
        return -500
    }
}