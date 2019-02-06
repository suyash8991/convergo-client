var mongoose=require('mongoose')
var fundRaiser=require('./fundRaiser')
var Schema=mongoose.Schema
ngoSchema=new Schema({
    name:String,
    branch:[String],
    donation:[{type:Schema.Types.ObjectId,ref:'fundRaiser'}],
    owner:String,
    website:String,
    contactNo:Number

})


module.exports=mongoose.model('ngo',ngoSchema)