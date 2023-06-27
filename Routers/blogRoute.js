const express = require("express")
const {newPost,allPost,singleBlogPost,updateBlogPost,deleteBlog} = require('../Controllers/blogController')

const Router = express.Router()

Router.post('/new', newPost)
Router.get('/viewAll', allPost)
Router.get('/view/:id', singleBlogPost)
Router.put('/updateblog/:id', updateBlogPost)
Router.delete('/deleteblog/:id', deleteBlog)
module.exports = Router;