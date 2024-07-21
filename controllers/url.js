const shortid = require("shortid");
const URL=require("../models/url")
    async function handlegenerateurl(req,res){
    
    const body=req.body
        
        const shortId=shortid(6)
        if (!body.url){
            return res.json({message:"enter url"})
            }
        await URL.create({
            shortId:shortId,
            redirectedUrl:body.url,
            visitedHistory:[]
        });
        // return res.json({id:shortId})
        return res.render("home",{Id:shortId})
   
        

    }
        
        
    module.exports=handlegenerateurl