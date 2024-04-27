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

//--------------------- Add new product dao ---------------------------
module.exports.updateProduct = async (reqBody) => {
    try {

        let req = reqBody;
        // console.log("----------------------------->> ", req)
        // UPDATE products SET status = ${2} , modifiedat = $1  WHERE id = $2
        let qryArr = [req.pdName, Number(req.pdCatId), req.pdDescription, req.pdPrice, req.pdImagename, req.currentDateTime, req.pId];
        let sqlQry;
        sqlQry = `UPDATE products SET name = $1 ,category_id = $2 , description = $3 , price = $4 , image_name = $5 ,modifiedat = $6 WHERE  id = $7 `
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

        console.log("----------------------------->> ", req)
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



function typeOFGlobalSearch(data) {
    if (typeof data === 'string') return true;
    return false;
}

//---------------------- Get all products --------------------------------
module.exports.getAllProducts = async (reqBody) => {
    // {
    //     "limit":"10",
    //     "offset":"10",
    //     "globalSearch":"any",
    //     "categorySearchId":"catId"
    // }
    try {

        let req = reqBody;
        // console.log("----------------------------->> ", req)
        let qryArr = [];
        let sqlQry;
        let dbRes = null;



        // console.log("-------->> req---> ", req)
        console.log(typeof req.categorySearchId);

        if (req.categorySearchId != null && req.categorySearchId != undefined && req.categorySearchId != "" && req.categorySearchId != 0) {
            // qryArr = [];
            qryArr = [req.categorySearchId,req.limit,req.offset];
            // qryArr.push(req.categorySearchId);
            sqlQry = ` SELECT 
            pd.id as productId,
            pd.name as productName,
            cat.category_name as categoryName,
            cat.id as categoryId,
            pd.description as productDesc,
            pd.price as productPrice,
            pd.image_name as productImg,
            pd.status as productStats,
            cat.status as categoryStats
            FROM products pd, category cat
            WHERE pd.category_id = $1 AND pd.category_id = cat.id
            ORDER BY productId ASC
            LIMIT $2 OFFSET $3

            `
            dbRes = await writePool.query(sqlQry, qryArr);
            return dbRes.rows;

        }
        //-===== global search active & inactive =============
        else if (req.userType == 'admin' &&
            req.globalSearch != null &&
            req.globalSearch != undefined &&
            req.globalSearch != '' &&
            req.globalSearch != 1 &&
            req.globalSearch != 0 && req.globalSearch != 2 && typeOFGlobalSearch(req.globalSearch)) {
            qryArr = [];
            qryArr.push(req.globalSearch);
            sqlQry = `SELECT 
            pd.id AS productid,
            pd.name AS productname,
            cat.category_name AS categoryname,
            cat.id AS categoryid,
            pd.description AS productdesc,
            pd.price AS productprice,
            pd.image_name AS productimg,
            pd.status AS productstats,
            cat.status AS categorystats
        FROM 
            products pd,
            category cat
        WHERE 
            pd.category_id = cat.id AND
            (
                LOWER(pd.name) LIKE '%' || LOWER($1) || '%' OR
                LOWER(cat.category_name) LIKE '%' || LOWER($1) || '%' OR
                LOWER(pd.price::TEXT) LIKE '%' || LOWER($1) || '%' OR
                LOWER(pd.description) LIKE '%' || LOWER($1) || '%' 
            ); `
            dbRes = await writePool.query(sqlQry, qryArr);
            return dbRes.rows;
        }
        //-===== global search active & inactive =============
        else if (typeOFGlobalSearch(req.globalSearch) == false && req.userType == 'admin') {
            qryArr = [];
            qryArr.push(req.globalSearch);
            sqlQry = `SELECT
            pd.id AS productid,
            pd.name AS productname,
            cat.category_name AS categoryname,
            cat.id AS categoryid,
            pd.description AS productdesc,
            pd.price AS productprice,
            pd.image_name AS productimg,
            pd.status AS productstats,
            cat.status AS categorystats
        FROM
            products pd
        INNER JOIN category cat
            ON pd.category_id = cat.id
        WHERE
            pd.status = $1;`

            dbRes = await writePool.query(sqlQry, qryArr);
            return dbRes.rows;
        }
        else {
            qryArr = [req.limit,req.offset];
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
            LIMIT $1 OFFSET $2
        `
            dbRes = await writePool.query(sqlQry, qryArr);
            return dbRes.rows;
        }

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