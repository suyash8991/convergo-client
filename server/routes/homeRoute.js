var exp=require('express')
var ngoctrlr=require("../controllers/ngoctrlr")
router=exp.Router()

router
.route('/')
.get(ngoctrlr.getAll)

module.exports=router