
function logOut(req,res,next){
    req.logout(function(err){
        if (err) next(err)
        res.redirect('/')
    })
    
}

module.exports = {
    logOut
}