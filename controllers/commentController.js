const Book = require('../models/book')

function addCommentHandler(req,res){
    // console.log(req.params.bookId)
    Book.findById(req.params.bookId , (err,book)=>{
        book.comments.push({"text" :req.body.text})
        book.save((err,book,n)=>{
            res.redirect(`/dashboard/books/${req.params.bookId}`)
        })
    })

}


function deleteCommentHandler(req,res){
    Book.findById(req.params.bookId,(err,book)=>{
        book.comments.id(req.params.commentId).remove()
        book.save((err,book,n)=>{
            res.redirect(`/dashboard/books/${req.params.bookId}`)
        })
    })

}

module.exports = {
    addCommentHandler,
    deleteCommentHandler
}