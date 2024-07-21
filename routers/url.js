const express=require("express")
const router=express.Router()
const handlegenerateurl=require("../controllers/url")
router.post("/",handlegenerateurl);
    



module.exports=router