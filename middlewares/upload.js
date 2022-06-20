const multer = require('multer')
const path = require('path')


// //config middleware
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public/booksimg')
        
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});


module.exports = multer({storage : storage})