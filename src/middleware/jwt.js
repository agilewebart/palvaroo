const jwt = require('jsonwebtoken');
const config = require('../config')

//---------- Function to authenticate user --------------
module.exports.jwtAuthMiddleWare = async (req, res, next) => {
    try {

        // Extract Jwt from request headers bearer token;
        const token = req.headers.authorization.split(' ')[1]; // getting token from client;
        if (!token) return res.status(401).json({ success: false, status: 401, message: "Unauthorize user", response: null });

        // If token is present ----
        const decodedTokenPayload = jwt.verify(token, config.JWT_SECRECTS.jwt_secrects_key);

        // Attched user Info to the request obj ----
        if (decodedTokenPayload) {
            req.userToken = decodedTokenPayload;
            next();
        }
        else {
            return res.status(400).json({ success: false, status: 400, message: "Invalid token" })
        }


    }
    catch (err) {
        console.log("------ Error from JWT middlware--> ", err);
        return res.status(500).json({ success: false, status: 500, message: "Internal Server error" })
    }
}

//---------- Function to create jwt --------------
module.exports.generateNewToken = async (userDataObj) => {
    try {
        return jwt.sign(userDataObj, config.JWT_SECRECTS.jwt_secrects_key, { expiresIn: '24h' })
    }
    catch (err) {
        console.log("------ Error from generating token--> ", err);
        return { message: "token generation failed", status: -999 }
    }
}