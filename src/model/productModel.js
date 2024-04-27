
const respStruct = require('../constants/respStructure')
const productDao = require('../dao/productDao');

//---------------------- Add new product ----------------------
module.exports.add_new_product = async (body) => {
    try {

        let reqBody = body;
        let result = await productDao.addNewProduct(reqBody);
        if (result == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            return respStruct.responseStruct(1, true, 200, "Data inserted successfully", null);
        }

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}

//---------------------- Add new product ----------------------
module.exports.update_product = async (body) => {
    try {

        let reqBody = body;
        let result = await productDao.updateProduct(reqBody);
        if (result == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            return respStruct.responseStruct(1, true, 200, "Data Updated successfully", null);
        }

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}


//---------------------- Delete  product ----------------------
module.exports.delete_product = async (body) => {
    try {

        let reqBody = body;
        let result = await productDao.deleteProduct(reqBody);
        if (result == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            return respStruct.responseStruct(1, true, 200, "Data Delete successfully", null);
        }

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}


//---------------------- Get all product ----------------------
module.exports.get_all_products = async (body) => {
    try {

        let reqBody = body;
        let result = await productDao.getAllProducts(reqBody);
        if (result == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            return respStruct.responseStruct(1, true, 200, "Data fetch successfully", result);
        }

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}



//---------------------- Get all Category ----------------------
module.exports.get_all_Category = async (body) => {
    try {

        let reqBody = body;
        let result = await productDao.getAllCategory(reqBody);
        if (result == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            return respStruct.responseStruct(1, true, 200, "Data fetch successfully", result);
        }

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}