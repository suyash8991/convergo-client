var exp=require('express')
var ngoctrlr=require("../controllers/ngoctrlr")
router=exp.Router()

router
.route('/')
.get()
// .get((req,res)=>{
    
//     // res.render('intro.ejs')
// })
.get(ngoctrlr.getAll)
router
.route('/ngo/:name')
.get(ngoctrlr.displayNgo)


module.exports=router