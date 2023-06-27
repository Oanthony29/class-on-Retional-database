const express = require("express")
const {newComment,allComments,singleBlogComment,deleteComment} = require('../Controllers/commentController')

const Route = express.Router()

Route.post('/newcom/:id', newComment)
Route.get('/Allcom', allComments)
Route.get('/singleCom/:id', singleBlogComment)
Route.delete('/delete/:blogId/:commentId', deleteComment)
module.exports = Route;