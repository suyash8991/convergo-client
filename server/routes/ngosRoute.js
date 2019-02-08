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
    res.render('event.ejs',{ngoName:req.params.name})
})

router
.route('/:name/Education')
.get((req,res)=>{
    res.render('edu.ejs',{ngo:req.params.name})

})


router
.route('/:name/login')
.get((req,res)=>{
    res.render('signin')}
    )

router
.route('/:name/register')
.get((req,res)=>{
    res.render('register',{name:req.params.name})
})

router
.route('/:name/About')
.get((req,res)=>{
    res.render('about.ejs',{ngo:req.params.name})
})

router                      //displays fundraiser of particular ngo
.route('/:name/Fundraiser')
.get(ngoctrlr.ngofundraiser)

module.exports=router