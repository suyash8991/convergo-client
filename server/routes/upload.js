var exp=require('express')
var router=exp.Router()
var fundRaiser=require('../models/fundRaiser')
var uploadDatactrlr=require("../controllers/uploadDatacrtlr")
var multer=require('multer')
var upload = multer({ dest: 'uploads/' })
router
.route('uploadData')
.post(upload.single('avatar'),(req,res)=>{
    var fileName=req.file.originalname
    title=req.body.title
    description=req.body.description
    total=req.body.amount
    end=req.body.endDate
    var fund=new fundRaiser({
        title:title,
        description:description,
        imageName:fileName,
        startDate:Date.now(),
        endDate:end,
        target:total
    })
})

modules.export=router