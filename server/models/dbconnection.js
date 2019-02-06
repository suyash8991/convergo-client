var mongoose=require('mongoose')
link="mongodb://convergo:convergo4ever@ds123675.mlab.com:23675/convergo"
mongoose.connect(link)

    mongoose.connection
    .once("open",()=>{
        console.log('successfully connected')

    })
    .on("error",(error)=>{
        console.log("failed")
        console.log(error)
    })



