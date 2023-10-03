var mongoose=require('mongoose')
var express=require('express')
var path = require('path')



mongoose.connect('mongodb://localhost:27017/angular')
.then(()=>console.log("connected to database"))
.catch((err)=>{console.log(err)})

var app=express()


app.use(express.static("crypto-checker"))


app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend server is running!");
})
