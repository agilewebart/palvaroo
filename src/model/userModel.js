const respStruct = require('../constants/respStructure');
const userDao = require('../dao/userDao');
const gToken = require('../middleware/jwt');

module.exports.user_log_in = async (reqBody) => {

    try {
        let req = reqBody;
        let dbRes = await userDao.userLogIn(req);

        if (dbRes == -500) {
            return respStruct.responseStruct(0, false, 400, "Some error occur", null);
        }
        else {
            if (dbRes.rowCount == 0) {
                return respStruct.responseStruct(1, true, 200, "Invalid Phone number or password", null);
            } else {
                const temp = dbRes.rows[0];
                const tempPayload = {
                    id: temp.id,
                    userPhone: temp.phone,
                    userType: temp.usertype
                }
                const generateToken = await gToken.generateNewToken(tempPayload);
                const reDefineRes = {
                    token: generateToken,
                    userPhone: temp.phone,
                    userType: temp.usertype
                }
                return respStruct.responseStruct(1, true, 200, "Successfully Login", reDefineRes);
            }
        }

    } catch (err) {
        console.log("-------------- Modal error---> ", err);
        return respStruct.responseStruct(0, false, 500, 'Internal server error', false);
    }
}