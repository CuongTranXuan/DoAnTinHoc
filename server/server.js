
// this app using ExpressJS framework
var express = require("express")
// config dependencies using in server
const app = express()

//config port
app.use(express.static("public"))
var port = process.env.PORT || 4000;


//load post router 
postRouter = require('./route/router')
app.use(postRouter)
// listening method
app.listen(port ,function(){
    console.log("server is on port " + port)
})
