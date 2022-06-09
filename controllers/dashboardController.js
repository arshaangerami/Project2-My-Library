const Book = require('../models/book')

function indexHandler(req,res){
    console.log(req.user)
    res.render('dashboard/dashboard' , {'user':req.user})
}

function addBookGetHandler(req,res){
    res.render('dashboard/addbook')

}

function addbookPostHandler(req,res){
//    console.log(req.file)
   const newBook = new Book ({
       title : req.body.title,
       description : req.body.description,
       author: req.body.author,
       image:{
           path:req.file.path,
           name:req.file.filename
       }

   })
   Book.create(newBook ,(err,book)=>{
       if(err){
           console.log(err)
           return
       }else{
           res.redirect('/dashboard')
       }
   })

}

function allBookGetHandler(req,res){
    Book.find({},(err,books)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('dashboard/allbooks',{ books})

    })
}

function bookDetailHandler(req,res){
    Book.findById(req.params.id,(err,book)=>{
        if(err){
            res.status(400).json(err)
            return
        }
        res.render('dashboard/bookdetail',{book})
    })
    
}

module.exports = {
    indexHandler,
    addBookGetHandler,
    addbookPostHandler,
    allBookGetHandler,
    bookDetailHandler
}