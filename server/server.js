var express = require("express")

const app = express()
app.use(express.static("public"))
var port = process.env.PORT || 4000;

app.listen(port ,function(){
    console.log("server is on port " + port)
})
