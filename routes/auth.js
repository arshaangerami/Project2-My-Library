const express = require('express')
const router = express.Router()
const passport = require('passport')
const { logOut } = require('../controllers/authController')

//Google authenticate routes
router.get('/google',passport.authenticate(
    'google',
    {scope: ['profile','email']}
    
    ))

// Google callback func
router.get('/google/callback',passport.authenticate(
    'google',{
        successRedirect:'/dashboard',
        failureRedirect:'/'
    }
)) 


// OAuth logout route
router.get('/logout', logOut)






module.exports = router