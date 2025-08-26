const express =require('express');

const app=express();



app.use("/hello",(req,res)=>{
    res.send("hello from hello side")
})

app.use("/test",(req,res)=>{
    res.send("hello from test side")
})

app.use((req,res)=>{
    res.send("hello from first side")
})

app.listen(3000);
