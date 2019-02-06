var ngo=require("../models/ngo")
require('../models/dbconnection')

describe("adding ngo",()=>{

    it("user added",()=>{
        var ng=new ngo({
            name:"jasko",
            branch:"hovoa",
            owner:"Xolo",
            website:"www.django.com",
            contactNo:7712932
        })
        ng.save().then(()=>{
            console.log("success")
        })

        
    })
})