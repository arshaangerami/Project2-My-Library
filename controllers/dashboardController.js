

function indexHandler(req,res){
    console.log(req.user)
    res.render('dashboard/dashboard')
}

module.exports = {
    indexHandler
}