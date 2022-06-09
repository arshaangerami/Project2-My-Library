const express = require('express')
const router = express.Router()
const dashboardCtrl = require('../controllers/dashboardController') 
const {isLogedIn} = require('../middlewares/authMiddleware')
const upload = require('../middlewares/upload')

router.get('/', isLogedIn , dashboardCtrl.indexHandler)

router.get('/books/add', isLogedIn, dashboardCtrl.addBookGetHandler)

router.post('/books/add', isLogedIn , upload.single('image'),dashboardCtrl.addbookPostHandler)

router.get('/books', isLogedIn , dashboardCtrl.allBookGetHandler)

router.get('/books/:id', isLogedIn , dashboardCtrl.bookDetailHandler)

module.exports = router