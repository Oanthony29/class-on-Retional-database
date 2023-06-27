const blogModel=require('../Models/blogModel')

exports.newPost = async(req,res)=>{
    try {
        const newposts = await blogModel.create(req.body)
        res.status(201).json({
            message: "posted sucessfully",
            data: newposts
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

// get All post
exports.allPost = async (req,res)=>{
    try {
        const all = await blogModel.find()
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
// get a single blog post

exports.singleBlogPost = async (req,res)=>{
    try {
        const singlePost = await blogModel.findById(req.params.id).populate("comment")
        res.status(201).json({
            message: "SINGLE blog post ",
            data: singlePost
        })
    } catch (error) {
        res.status(400).json({
            status: "Failed",
            message: error.message
        })
    }
}

// Upadate A Blog
exports.updateBlogPost = async (req,res)=>{
    try {
        const updateblog = await blogModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.status(201).json({
            message: "updated blog post sucessfuly",
            data: updateblog
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            message: error.message
        })
    }
}

//Delete A Blog Post
exports.deleteBlog = async (req,res)=>{
    try {
        const removeBlog = await blogModel.findByIdAndDelete(req.params.id)
        res.status(201).json({
            message: " blog post sucessfuly deleted",
        })
    } catch (error) {
        res.status(401).json({
            status: "Failed",
            message: error.message
        })
    }
}
