const express = require('express')
const router = express.Router()
const dashboardCtrl = require('../controllers/dashboardController') 
const {isLogedIn} = require('../middlewares/authMiddleware')

router.get('/', isLogedIn , dashboardCtrl.indexHandler)

module.exports = router