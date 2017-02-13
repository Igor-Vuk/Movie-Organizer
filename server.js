var express = require("express");
var app = express();
const PATH = require("path");
const PORT = process.env.IP || 3000;

app.use(express.static(__dirname + "/public"));




app.get("*", function(req, res) {
    res.sendFile(PATH.resolve(__dirname, "public", "index.html"));
});

app.listen(PORT, function(){
    console.log("Express server is up on port " + PORT);
});