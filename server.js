const express = require('express');
const mongoose =require('mongoose')
const dotenv = require("dotenv");
dotenv.config({path: './Config/config.env'})
const route = require('./Routers/blogRoute')
const router = require('./Routers/commentRoute')

const app = express();
app.use(express.json());
app.use('/api', route)
app.use('/api', router)

const DB = process.env.DATABASE

mongoose.connect(DB
).then(()=>{
    console.log("Database Connected.")
}).then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is Connected.")
    })
});