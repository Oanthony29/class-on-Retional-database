const commentModel = require('../Models/commentModel')
const blogModel = require('../Models/blogModel')

exports.newComment = async (req, res)=>{
    try {
        const blog = await blogModel.findById(req.params.id)
        const postComments = await new commentModel(req.body)
        postComments.posts =blog;
        await postComments.save()
        blog.comment.push(postComments)
        await blog.save()
        res.status(201).json({
            status: "sucess",
            message: "commented sucessfully",
            data:blog
        })
    } catch (error) {
        res.status(500).json({
            status: "Failed",
            message: error.message
        })
    }
}

// Get All blog comments
exports.allComments = async (req,res)=>{
    try {
        const all = await commentModel.find()
        res.status(201).json({
            message: "All blog post ",
            data: all
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

// Get Single blog comments
exports.singleBlogComment = async (req,res)=>{
    try {
        const singComment = await commentModel.findById(req.params.id)
        res.status(201).json({
            message: "single blog comment ",
            data: singComment
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}


//Delete A Blog comment
exports.deleteComment = async (req,res)=>{
    try {
        const commentId = req.params.commentId
        const blogId = req.params.blogId
        const blog = await blogModel.findById(blogId);
        const deleteComment = await commentModel.findByIdAndDelete(commentId)
        // console.log(blog);
        await blog.comment.pull(deleteComment)
        await blog.save()
        res.status(201).json({
            message: " comment  sucessfuly deleted",
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            message: error.message
        })
    }
}