
// this app using ExpressJS framework
var express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors') // Cross-Origin Resource Sharing (CORS) is a mechanism that uses
                             // additional HTTP headers to tell a browser to let a web application running at one 
                             // origin (domain) have permission to access selected resources 
                             // from a server at a different origin
const morgan = require('morgan')
// config dependencies using in server
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

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
