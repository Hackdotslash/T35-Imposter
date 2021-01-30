const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/rapidred",{useNewUrlParser:true});


/*****************SCHEMAS********************/
const subscribeSchema={
  email: String
};

const bloodBankSchema={
  name: String,
  email: String,
  address: String,
  country: String,
  state: String,
  pincode: Number
};





/**************Collections****************/
const subscribe = mongoose.model("subscribe",subscribeSchema);





/*****************************GET REQUESTS****************************/
app.get("/",(req,res)=>{
	res.render("request");
});

app.get("/request",(req,res)=>{
	res.render("request");
});

app.get("/register",(req,res)=>{
	res.render("register");
});

app.get("/banks",(req,res)=>{
	res.render("banks");
});

app.get("/about",(req,res)=>{
	res.render("about");
});

/************************POST REQUESTS*******************/
app.post("/subscribe",(req,res)=>{

	const eid = new subscribe({
		email: req.body.email
	});
	eid.save();
	res.redirect("/");
});






/*******************************************************/
app.listen(3000, function() {
  console.log("Server started on port 3000");
});