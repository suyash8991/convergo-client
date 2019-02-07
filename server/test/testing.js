var ngo=require("../models/ngo")
require('../models/dbconnection')
var fundRaiser=require('../models/fundRaiser')
var fs=require('fs')
var path=require('path')

// describe("adding ngo",()=>{

//     it("user added",()=>{
//         var ng=new ngo({
//             name:"jasko",
//             branch:"hovoa",
//             owner:"Xolo",
//             website:"www.django.com",
//             contactNo:7712932
//         })
//         ng.save().then(()=>{
//             console.log("success")
//         })

        
//     })
// })
// it("adding a fund raiser event",()=>{
//     title="Have faith";
//     description="thats great";
//     fileName="treaty";
//     total=26000;
    
//     var fund=new fundRaiser({
//         title:title,
//         description:description,
//         imageName:fileName,
//         startDate:Date.now(),
//         endDate:Date.now()+11,
//         target:total
//     })
//     fund.save()
//     .then(()=>{
//         console.log("Test fund made ")
//     })
// })
// it("searching image",()=>{
//     var location="./public/images"
//     fs.readdir(location,(err,files)=>{
//         if(err){
//             console.log(err)
//         }
//         files.forEach(function(file){
//             console.log("FIle name ",file)
//             fileName=file.replace(path.extname(file),"")
//              if(fileName=='donate'){
//                  console.log("found!!")
                 
//              }

//             //  console.log(path.extname(file))
           
//         })
//     })
// })

// it("all funds ",()=>{

//     fundRaiser.find({},'title description endDate target',(err,fund)=>{
//         if(err){
//             console.log("yes error in sending")
//         }
//         else{

//             console.log("FUnds present ",fund)
//             res.send(fund)
// }
//     })
// })
