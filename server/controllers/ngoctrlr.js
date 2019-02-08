var ngo=require("../models/ngo")
var funds=require("../models/fundRaiser")
var fs=require('fs');
var path=require('path')
module.exports.getAll=function(req,res){

    console.log("her i am called in big one ",req.params)
    ngo.find({},function(err,ngos){
        if(err){
            console.log("error in ngo")
        }
        else{
            res.render('intro',{ngos:ngos})
        }
    })
}

module.exports.displayNgo=function(req,res){
    ngoName=req.params.name
     console.log("home site of  Ngo name is ",ngoName," ",req.params)
    ngo.findOne({name:ngoName} ,(err,doc)=>{


       
        res.render('ngoPage' , {  req : req,ngo:doc,ngoName:ngoName })
    })
    
}


module.exports.donationForm=function(req,res){
    console.log("donationform ",req.params.name," ",req.params)
    res.render('donateForm.ejs',{ngoName:req.params.name})
}

module.exports.sendFinishedFunraisers=function(req,res){

    funds.find({},'title description endDate target',(err,fund)=>{
        if(err){
            console.log("yes error in sending")
        }
        else{

            console.log("FUnds present ",fund)
            res.send(fund)
        }
    })
}

module.exports.ngofundraiser=function(req,res){
    ngoName=req.params.name;
    ngo.findOne({name:ngoName},(err,ngo)=>{
        if(err){
            console.log("no current fundraisers")
        }
        else{
        funds=[]
        ngo.forEach(function(fund){
            funds.push(fund)
        console.log("funds list ",funds)
        res.render('fundsShow.ejs',{funds:funds})
        })
        }
    
    })
}