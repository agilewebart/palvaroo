const express = require('express');
const router = express.Router();
const constant = require('../constants/statusCode');
const enquiryModel = require('../model/enquiryModel');
const gToken = require('../middleware/jwt');


//-------------- Add new Product --------------------------
router.post('/v1/getallenquirys', gToken.jwtAuthMiddleWare, gToken.ch3ckRole, async (req, res) => {
    try {
        let body = req.body;
        let finalResult = await enquiryModel.get_all_enquiry(body);

        if (finalResult.bkendFlag == 1) {
            return res.status(200).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })
        }
        return res.status(200).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })

    } catch (err) {
        console.log("-------Add Controller Error --> ", err);
        return res.status(200).json({ success: false, status: 500, message: "Internal Server error" })
    }
});

module.exports = router;