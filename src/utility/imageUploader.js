const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + Math.round(Math.random() * 100);
        const extension = path.extname(file.originalname);
        cb(null, uniqueSuffix + '_image' + extension)
    }
})


const upload = multer({ storage })


module.exports = {
    upload
}