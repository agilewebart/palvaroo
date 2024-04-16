
const respStruct = require('../constants/respStructure')
const productDao = require('../dao/productDao');

//---------------------- Add new product ----------------------
module.exports.add_new_product = async (body) => {
    try {

        let reqBody = body;
        let result = await productDao.addNewProduct(reqBody);

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}