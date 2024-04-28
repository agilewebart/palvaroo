const jwt = require('jsonwebtoken');
const config = require('../config')

//---------- Function to authenticate user --------------
module.exports.jwtAuthMiddleWare = async (req, res, next) => {
    try {

        const authorizationHeader = req.headers['authorization'];
        if (!authorizationHeader) return res.status(200).json({ success: false, status: 403, message: "Authheader not found" })


        const token = authorizationHeader && authorizationHeader.split(' ')[1];
        // console.log( typeof token)
        if (token == "null" || token == undefined || token == "" || token == null) {
            return res.status(200).json({ success: false , status: 401, message: 'Unauthorize token' })
        }
        else {
            const decodedTokenPayload = jwt.verify(token, config.JWT_SECRECTS.jwt_secrects_key);

            if (decodedTokenPayload) {
                req.userToken = decodedTokenPayload;
                next();
            }
            else {
                res.status(200).json({ success: false , status: 400, message: "Some error occur" })
            }
        }
    }
    catch (err) {
        console.log("------ Error from JWT middlware--> ", err);
        return res.status(200).json({ success: false, status: 500, message: "Internal Server error" })
    }
}

//-------------- Validated role--------
module.exports.ch3ckRole = async (req, res, next) => {
    try {
        const whichRole = await req.userToken.userType.trim();

        if (whichRole == config.IS_ADMIN.isAdmin) {
            next();
        }
        else {
            return res.status(200).json({ success: false, status: 401, message: 'Unauthorize User' })
        }

    } catch (err) {
        console.log("------ Error from role checking--> ", err);
        return res.status(200).json({ success: false, status: 500, message: "Internal Server error" })
    }
}

//---------- Function to create jwt --------------
module.exports.generateNewToken = async (userDataObj) => {
    try {
        return jwt.sign(userDataObj, config.JWT_SECRECTS.jwt_secrects_key, { expiresIn: '24h' })
    }
    catch (err) {
        console.log("------ Error from generating token--> ", err);
        return  -999; 
    }
}