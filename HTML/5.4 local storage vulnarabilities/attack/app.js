var express = require("express");
var fs = require('fs');
var app = express();

app.get("/hack/:data",function(req,res){
    fs.writeFileSync("data.txt",req.params.data);
    res.send(req.params.data);
})

app.listen(3000);
