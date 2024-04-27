const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel')

//------------ User signup --------------------


//-------------- User login ---------------------
router.post('/v1/loginuser', async (req, res) => {
    try {
        let reqBody = req.body;
        let finlRes = await userModel.user_log_in(reqBody);
        if (finlRes.bkendFlag == 1) {
            return res.status(finlRes.fendStuct.status).json({ success: finlRes.fendStuct.success, status: finlRes.fendStuct.status, message: finlRes.fendStuct.message, response: finlRes.fendStuct.response })
        }
        return res.status(finlRes.fendStuct.status).json({ success: finlRes.fendStuct.success, status: finlRes.fendStuct.status, message: finlRes.fendStuct.message, response: finlRes.fendStuct.response })
    }
    catch (err) {
        console.log("-------Login Controller Error --> ", err);
        return res.status(500).json({ success: false, status: 500, message: "Internal Server error" })
    }
})


module.exports = router;