var ngo=require("../models/ngo")

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