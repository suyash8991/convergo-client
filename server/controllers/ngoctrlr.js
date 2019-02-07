var ngo=require("../models/ngo")
var funds=require("../models/fundRaiser")
var fs=require('fs');
var path=require('path')
module.exports.getAll=function(req,res){
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
    console.log("called in displayNGO ",req.params.name)
   ngo.findOne({name:req.params.name}).populate('donation').exec((err,polo)=>{
   
       if(err){
           console.log("not found ngo ngoctrlr")
       }
       else{
           
            console.log("POLO is ",polo)
           funds=polo.donation
       
           res.render('ngoPage',{ngo:polo,funds:funds})
       }
   
   })
   } 

module.exports.donationForm=function(req,res){
    res.render('donateForm.ejs',{ngoName:req.params.ngoName})
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