const express = require('express');
const router = express.Router();
const indexCtrl =require('../controllers/indexController')

// GET home page. /
router.get('/',indexCtrl.indexHandler)



module.exports = router;