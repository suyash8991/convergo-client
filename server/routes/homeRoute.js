var exp=require('express')
router=exp.Router()

router
.route('/')
.get((req,res)=>{
    res.render('intro.ejs')
})

router
.route('/ngo')
.get((req,res)=>{
    res.render('ngoPage')
})
module.exports=router