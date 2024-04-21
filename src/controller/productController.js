const express = require('express');
const router = express.Router();
const constant = require('../constants/statusCode');
const productModel = require('../model/productModel');
const imgUpload = require('../utility/imageUploader');




//---------------- Product Image Upload -----------------
router.post('/v1/productimageupload', imgUpload.upload.single('file_name'), async (req, res) => {
    try {
        let body = req.file;
        const fileName = body.filename;
        if (fileName) {
            return res.status(constant.statusCode.SUCCESS).json({ success: true, status: constant.statusCode.SUCCESS, message: '', response: fileName })
        }
        return res.status(constant.statusCode.SOME_ERROR_OCCUR).json({ success: true, status: constant.statusCode.SOME_ERROR_OCCUR, message: 'Some error occur', response: null })

    } catch (err) {
        console.log("-------File Controller Error --> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
})


//-------------- Add new Product --------------------------
router.post('/v1/addNewProduct', async (req, res) => {
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
});


//-------------- Delete Product --------------------------
router.post('/v1/deleteProduct', async (req, res) => {
    try {
        let body = req.body;
        let finalResult = await productModel.delete_product(body);

        if (finalResult.bkendFlag == 1) {
            return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })
        }
        return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })

    } catch (err) {
        console.log("-------Add Controller Error --> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
});



//----------------- Get all products ------------------------
router.post('/v1/getAllProducts', async (req, res) => {
    try {
        let body = req.body;
        let finalResult = await productModel.get_all_products(body);

        if (finalResult.bkendFlag == 1) {
            return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })
        }
        return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })

    } catch (err) {
        console.log("-------Add Controller Error --> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
});





//----------------- Get all products ------------------------
router.post('/v1/getAllCategory', async (req, res) => {
    try {
        let body = req.body;
        let finalResult = await productModel.get_all_Category(body);

        if (finalResult.bkendFlag == 1) {
            return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })
        }
        return res.status(finalResult.fendStuct.status).json({ success: finalResult.fendStuct.success, status: finalResult.fendStuct.status, message: finalResult.fendStuct.message, response: finalResult.fendStuct.response })

    } catch (err) {
        console.log("-------Add Controller Error --> ", err);
        return res.status(500).json({ success: true, status: 500, message: "Internal Server error" })
    }
});



module.exports = router;