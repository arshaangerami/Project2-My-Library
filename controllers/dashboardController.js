const Book = require('../models/book')
const user = require('../models/user')


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
    let query = null
    if(req.query.search){
         query = Book.find({title:new RegExp(req.query.search , 'i') })
    }else {
         query = Book.find({})

    }
    query.exec((err,books) => {
        if(err){
                    res.status(400).json(err)
                    return
                }
                res.render('dashboard/books',{ 
                    "books": books,
                    isMyBookPage : false
                })
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

function checkoutHandler(req,res){
   
    Book.findById(req.params.bookId, (err,book)=>{
        if(req.query.checkout === 'true'){
            book.owner = req.user._id

        }else{
            book.owner = null
        }

        try{
        book.save().then((b)=>{

                res.redirect('/dashboard/books/mybook')
              })
            }catch(e){
                console.log(e)
            }

    })
//     Book.findByIdAndUpdate(req.params.bookId,{owner :req.user._id} ,(err,book)=>{
//         console.log(book)
//         if(err){
//                     res.status(400).json(err)
//                     return
//                 }
//                 // book.owner = req.user._id
//                 // book.save((err,book)=>{

//                     res.redirect('/dashboard/mybook')
//                 // })
        
//             })

}

function myBookHandler(req,res){
    console.log('in my books')
    // User.findById(req.user._id ,(err,user)=>{

   
      Book.find({ owner:req.user._id},(err,books) => {
          if(err){
             res.status(400).json(err)
             return
        }
            res.render('dashboard/books',{
                "books":books,
                "isMyBookPage":true
            })
    })
// } )

}

function deleteBookHandler(req,res){
    Book.findByIdAndDelete(req.params.bookId,(err,book)=>{
        res.redirect('/dashboard/books')
    })

}




module.exports = {
    indexHandler,
    addBookGetHandler,
    addbookPostHandler,
    allBookGetHandler,
    bookDetailHandler,
    checkoutHandler,
    myBookHandler,
    deleteBookHandler,
    
   
}