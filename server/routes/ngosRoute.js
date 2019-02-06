var exp=require("express")
var router=exp.Router()
var ngoctrlr=require("../controllers/ngoctrlr")
router
.route('/donate')
.get(ngoctrlr.donationForm)

module.exports=router