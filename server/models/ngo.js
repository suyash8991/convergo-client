var mongoose=require('mongoose')
var Schema=mongoose.Schema
ngoSchema=new Schema({
    name:String,
    branch:[String],
    owner:String,
    website:String,
    contactNo:Number

})


module.exports=mongoose.model('ngo',ngoSchema)