var express               = require('express');
var parser                = require('body-parser');
var mongoose              = require('mongoose');
var port=2448
var methodOverride				= require('method-override');

var passport              = require('passport');
var localstrategy         = require('passport-local');
var passportlocalmongoose = require('passport-local-mongoose');
app=express()
 

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
app.use("/:ngoName",ngosRoute)

app.post('/dummy',(req,res)=>{

	console.log(req.body)
	res.send(done)
})
app.listen(port , function () {
	console.log('Site is active on localhost:' + port+'/');
});
