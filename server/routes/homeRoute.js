var exp=require('express')
var ngoctrlr=require("../controllers/ngoctrlr")
router=exp.Router()

router
.route('/')
.get(ngoctrlr.getAll)

router
.route("/uploadStudent")
.get((req,res)=>{
    console.log("ehr")
    res.render("upload")
})
module.exports=router