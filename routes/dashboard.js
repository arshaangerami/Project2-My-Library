const express = require('express')
const router = express.Router()
const dashboardCtrl = require('../controllers/dashboardController')
const commentCtrl = require('../controllers/commentController')
const commentRouter = require('./comment') 
const {isLogedIn} = require('../middlewares/authMiddleware')
const upload = require('../middlewares/upload')

router.get('/', isLogedIn , dashboardCtrl.indexHandler)

router.get('/books/add', isLogedIn, dashboardCtrl.addBookGetHandler)

router.post('/books/add', isLogedIn , upload.single('image'),dashboardCtrl.addbookPostHandler)

router.get('/books', isLogedIn , dashboardCtrl.allBookGetHandler)


router.patch('/books/:bookId/checkout', isLogedIn, dashboardCtrl.checkoutHandler)


router.get('/books/mybook',isLogedIn , dashboardCtrl.myBookHandler)

router.get('/books/:id', isLogedIn , dashboardCtrl.bookDetailHandler)

router.delete('/books/:bookId', isLogedIn , dashboardCtrl.deleteBookHandler)

// router.use('/books/:bookId/comments',isLogedIn, commentRouter)
router.post('/books/:bookId/comments', isLogedIn , commentCtrl.addCommentHandler)
 
router.delete('/books/:bookId/comments/:commentId', isLogedIn, commentCtrl.deleteCommentHandler)


module.exports = router