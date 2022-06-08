function isLogedIn (req,res,next) {
    if (req.user){
        next()
    }else{
        res.redirect('/')
    }
}


module.exports = {
    isLogedIn
}