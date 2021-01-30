const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/rapidRed', {useNewUrlParser: true, useUnifiedTopology: true});
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
	res.render("register");
});

app.get("/request",(req,res)=>{
	res.render("request");
});








app.listen(3000, function() {
  console.log("Server started on port 3000");
});