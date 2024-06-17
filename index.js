const express = require("express");
const bodyParser = require("body-parser");
const port = 3000
const app = express();
app.use(bodyParser.json());
// fs.readFile("path", "utf-8", ())
app.get('/', function(req,res){
    console.log(req.body);
    res.send("<b>hi there</b>");
    
})

app.listen(port);