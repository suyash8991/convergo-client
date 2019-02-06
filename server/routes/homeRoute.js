var exp=require('express')
router=exp.Router()

router
.route('/')
.get((req,res)=>{
    res.render('intro.ejs')
})

module.exports=router