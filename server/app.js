var express               = require('express');
var parser                = require('body-parser');
var mongoose              = require('mongoose');

var methodOverride				= require('method-override');

var passport              = require('passport');
var localstrategy         = require('passport-local');
var passportlocalmongoose = require('passport-local-mongoose');
app=express()
 


app.set('view engine', 'ejs');
// app.use("/public" , express.static(dir + '/public'));
// app.use("/uploads" , express.static(dir + '/uploads'));

app.use(parser.urlencoded({extended:true}));
app.use(parser.json());

var publicDir = require('path').join(__dirname,'/public');
app.use(express.static(publicDir));

app.use(methodOverride("_method"));
app.get("/",(req,res)=>{
    res.render('intro.ejs')
})


app.listen(2447 , function () {
	console.log('Site is active on localhost:' + 2355+'/');
});
