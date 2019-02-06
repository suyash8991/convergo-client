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

module.exports.displayNgo=function(req,res){

ngo.findOne({name:req.params.name},function(err,polo){

    if(err){
console.log("not found ngo ngoctrlr")
    }
    else{

        console.log("ngo "+polo)
        res.render('ngoPage',{organ:polo})
    }
})

}