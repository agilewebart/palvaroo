//------------ MYSQL ------------
// const dbConnMysql = require('../db_connection');
// const [dbRes,fields] = await dbConn.connection.execute(sqlQry,qryArr);

//------------ POSTGRES ------------
const { readPool, writePool } = require('../db_connection');
// sqlQry = "SELECT admin_email,admin_phone FROM admin_info WHERE admin_email = $1 AND admin_phone = $2"
// let resp = await readPool.query(sqlQry, qryArr);


//  TABLE NAME = products
// name
// category_id
// description
// price
// image_name
// createdat
// modifiedat

//--------------------- Add new product dao ---------------------------
module.exports.addNewProduct = async (reqBody) => {
    try {

        let req = reqBody;
        // console.log("----------------------------->> ", req)
        let qryArr = [req.pdName, Number(req.pdCatId), req.pdDescription, req.pdPrice, req.pdImagename, req.currentDateTime, req.currentDateTime];
        let sqlQry;
        sqlQry = `INSERT INTO products (name , category_id, description ,price , image_name , createdat, modifiedat)
                  VALUES($1,$2,$3,$4,$5,$6,$7)`
        const dbRes = await writePool.query(sqlQry, qryArr);
        return dbRes;

    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
}


//---------------------- Delete product --------------------------------
module.exports.deleteProduct = async (reqBody) => {
    try {

        let req = reqBody;
        // console.log("----------------------------->> ", req)
        let qryArr = [req.currentDateTime, req.pdId];
        let sqlQry;
        sqlQry = `UPDATE products SET status = ${2} , modifiedat = $1  WHERE id = $2`
        const dbRes = await writePool.query(sqlQry, qryArr);
        // console.log("--------->> ", dbRes)
        return dbRes.rowCount;

    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
}



//---------------------- Get all products --------------------------------
module.exports.getAllProducts = async (reqBody) => {
    // {
    //     "limit":"10",
    //     "offset":"10",
    //     "globalSearch":"any",
    //     "categorySearch":"catId"
    // }
    try {

        let req = reqBody;
        // console.log("----------------------------->> ", req)
        let qryArr = [req.limit];
        let sqlQry;
        sqlQry = `
            SELECT 
            pd.id as productId,
            pd.name as productName,
            cat.category_name as categoryName,
            cat.id as categoryId,
            pd.description as productDesc,
            pd.price as productPrice,
            pd.image_name as productImg,
            pd.status as productStats,
            cat.status as categoryStats
            FROM products pd
            INNER JOIN 
            category cat
            ON (pd.category_id = cat.id)
            ORDER BY productId ASC
            LIMIT $1
        `
        const dbRes = await writePool.query(sqlQry, qryArr);
        return dbRes.rows;

    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
} 



//---------------------- Get all products --------------------------------
module.exports.getAllCategory = async (reqBody) => {
    
    try {

        let req = reqBody;
        // console.log("----------------------------->> ", req)
        let qryArr = [];
        let sqlQry;
        sqlQry = ` SELECT * FROM category`
        const dbRes = await writePool.query(sqlQry, qryArr);
        return dbRes.rows;

    }
    catch (err) {
        console.log("---------Db Error ----> ", err);
        return -500
    }
} 