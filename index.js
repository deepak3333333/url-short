const express=require("express")
const app=express()
const mongoose=require("mongoose")
const urlRouter=require("./routers/url")
const URL=require("./models/url")
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set("view engine","ejs")
const path=require("path")

app.set("views",path.resolve("./views"))

mongoose.connect("mongodb://localhost:27017/url2")
.then(()=>{
    console.log("database connected");
})
.catch((err)=>{
    console.log(err);
})


app.use("/url",urlRouter)

app.get("/:id",async(req,res)=>{
    const ide=req.params.id
   const entry= await URL.findOneAndUpdate(
    {shortId:ide},
        {
            $push:{
                visitedHistory:{
                    time:Date.now(),
                }
            }
        })
        if(entry){
            res.redirect(entry.redirectedUrl);
        }
        else{
            res.status(404).send("url not ")
        }
})
app.get("/",async(req,res)=>{
    // const rp=await URL.find({})
    console.log(rp);

    return res.render("home")
})
    
app.get("/anlysiaing/data/:id",async(req,res)=>{
    const rp=await URL.find({})


return res.render("anlysiaing",{rp})

})







app.listen("12",()=>{
    console.log("yes connected server to port number 12");
})