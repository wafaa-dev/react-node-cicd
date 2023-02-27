const express=require("express");
const app=express();


app.get('/names',(req,res)=>{
    res.send("wafaa");
})

app.listen(5007,()=>{
    console.log("server is running on port 5007");
})