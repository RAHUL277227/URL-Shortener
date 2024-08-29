const express = require("express");
const {ConnectToDB} = require("./dbconnect");
const path = require("path");
const uriModel = require("./models/UrlsModels");
const uriRoutes = require('./routes/Uri');


const app = express();

app.set("view engine","ejs");
app.set(path.resolve('views'));

// middleware
app.use(express.urlencoded({extended:false}));
app.use("/url",uriRoutes);


// connect to DB
ConnectToDB("mongodb://localhost:27017/Urls")
.then(console.log("connect to DB"))

app.get("/", async (req,res)=>{
    const allurl = await uriModel.find({});
    res.render("home",{
        url:allurl
    });
})


// server
app.listen(8000,function(req,res){
    console.log('server ready');
});