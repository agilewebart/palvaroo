const express = require('express');
const router = express.Router();
const productModel = require('../model/productModel')
const imgUpload = require('../utility/imageUploader');


//---------------- Product Image Upload -----------------
router.post('/v1/productimageupload', imgUpload.upload.single('file_name'), async (req, res) => {
    try {
        let body = req.file;
        console.log(body.filename)
        

    } catch (err) {
        console.log("-------File Controller Error --> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})


//-------------- Add new Product --------------------------
router.post('/v1/addnewproduct', async (req, res) => {
    try {
        let body = req.body;
        let finalResult = await productModel.add_new_product(body);

        if (finalResult.bkendFlag == 1) {
            return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })
        }
        return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })

    } catch (err) {
        console.log("-------Add Controller Error --> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})

module.exports = router;