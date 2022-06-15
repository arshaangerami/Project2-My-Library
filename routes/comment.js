const express = require('express')
const router = express.Router()
const commentCtrl = require('../controllers/commentController') 
const {isLogedIn} = require('../middlewares/authMiddleware')
const upload = require('../middlewares/upload')

router.post('/', commentCtrl.addCommentHandler)






module.exports = router