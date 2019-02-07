var express               = require('express');
var parser                = require('body-parser');
var mongoose              = require('mongoose');
var port=2451//user
var methodOverride				= require('method-override');
var multer= require('multer')
var uploader=multer({dest:"./public/uploads"})
var fs= require('fs')
var passport              = require('passport');
var localstrategy         = require('passport-local');
var passportlocalmongoose = require('passport-local-mongoose');
app=express()
var ngo=require('./models/ngo')
 var ngoctrlr=require('./controllers/ngoctrlr')
var fundRaiser=require('./models/fundRaiser')
require('./models/dbconnection')
app.set('view engine', 'ejs');
// app.use("/public" , express.static(dir + '/public'));
// app.use("/uploads" , express.static(dir + '/uploads'));

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(methodOverride("_method"));

intro= require("./routes/homeRoute")
ngosRoute=require("./routes/ngosRoute")
app.use("/",intro)
app.use("/ngo",ngosRoute)
app.use((req,res,next)=>{
	ngo.find({},(err,ngo)=>{
		res.locals.ngo=ngo;
		next();
	})
})


app
.get('/sample/photo',(req,res)=>{
	res.render("b.ejs")
})
app.post('/sample/photo',uploader.single('avatar'),function(req,res,next){

	console.log("wohoo")
	console.log("file name is ",req.file.originalname)
	res.send("ok")
})

app.post('/dummy',uploader.single('image'),(req,res)=>{
console.log("NEWWW")

console.log(req.body)
	v=req.file
	fu=req.body
	console.log( "here")
	console.log(v)
	filename=v.filename
	console.log("name of file ",filename)
	 fund=new fundRaiser({
		 title:fu.causeTitle,
		 description:fu.description,
		 imageName:filename,
		 startDate:Date.now(),
		 endDate:fu.date,
		 target:fu.amount
		 
	 })
	 fund.save(function(err,f){
		if(err){
			res.send({dsone:" not done"})
			console.log("Error in inserting data")
		}
		else{
			console.log("Success")
		}
	 })
	// console.log("end and file received is ",req.file.originalname)
	// d=req.body.image.split('/').pop(-1)
	// console.log(d)
	
	
	; 
	res.send({done:"done"})
})

app.get('/funds',ngoctrlr.sendFinishedFunraisers)
app.listen(port , function () {
	console.log('Site is active on localhost:' + port+'/');
});
