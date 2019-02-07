var exp=require("express")
var router=exp.Router()
var ngoctrlr=require("../controllers/ngoctrlr")

router
.route('/')
.get(ngoctrlr.getAll)

router
.route('/:name')
.get(ngoctrlr.displayNgo)
router
.route('/:name/Donate')
.get(ngoctrlr.donationForm)
router
.route('/:name/Events')
.get((req,res)=>{
    res.render('event.ejs',{ngo:req.params.name})

})

router
.route('/:name/Education')
.get((req,res)=>{
    res.render('edu.ejs',{ngo:req.params.name})

})



router
.route('/:name/About')
.get((req,res)=>{
    res.render('about.ejs',{ngo:req.params.name})
})
module.exports=router