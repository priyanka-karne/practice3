var express = require("express")
var app=express();
app.get("/",(req,resp)=>{
    resp.send(
    "<h1>WELCOME TO IACSD</h1>"
    )
});
app.listen(9000);
console.log("server start at port no 8080");