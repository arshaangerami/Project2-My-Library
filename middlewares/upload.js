// //config middleware

const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // const booksImgPath = path.resolve(__dirname,'../public/booksimg' )
        // console.log(booksImgPath)
        cb(null, './public/booksimg')
        
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + '.jpg')
    }
});


module.exports = multer({storage : storage})