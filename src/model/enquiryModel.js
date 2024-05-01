const respStruct = require('../constants/respStructure')
const enquiryDao = require('../dao/enquiryDao');

//---------------------- Add new product ----------------------
module.exports.get_all_enquiry = async (body) => {
    try {

        let reqBody = body;
        let result = await enquiryDao.getAllEnquiry(reqBody);
        if (result == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            return respStruct.responseStruct(1, true, 200, "Data fetched successfully", result);
        }

    }
    catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}
