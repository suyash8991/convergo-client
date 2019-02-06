var mongoose=require('mongoose')
var Schema=mongoose.Schema

fundRaiserSchema=new Schema({
    title:String,
    description:String,
    imageName:String,
    startDate:Date,
    endDate:Date,
    totalDonation:Number,
    target:Number

})




module.exports=mongoose.model('fundRaiser',fundRaiserSchema)
