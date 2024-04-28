const express = require('express');
const router = express.Router();
const emailModel = require('../model/emailModel')
const constant = require('../constants/statusCode');

//----------------- Send mail --------------------------
router.post('/v1/sendmail', async (req, res) => {
    try {

        let body = req.body;

        let fnlRes = await emailModel.send_mail(body);
        if (fnlRes.bkendFlag == 1) {
            return res.status(200).json({ success: fnlRes.fendStuct.success, status: fnlRes.fendStuct.status, message: fnlRes.fendStuct.message, response: fnlRes.fendStuct.response })
        }
        else {
            return res.status(200).json({ success: fnlRes.fendStuct.success, status: fnlRes.fendStuct.status, message: fnlRes.fendStuct.message, response: fnlRes.fendStuct.response })
        }

        //--------- Store Mail info in enquiry table -------------


    } catch (err) {
        console.log("--------_email error-->", err);
        return res.status(200).json({ success: false, status: 500, message: "Internal Server error" })

    }
})

module.exports = router;
