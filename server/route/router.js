var app = require("express")
var postRouter = app.Router()// define router object
var dbCredential = require('../credentials/dbCredential')// load db params
var sql = require("mysql")
var con = sql.createConnection(dbCredential);// connect to database
// homepage route

postRouter.route('/').get(function(req,res){// firstly we get everything into homepage
    con.connect(function(err){
        if (err) console.log(err) 
            else {
                    con.query("SELECT * FROM NGUOIDUNG", function(err, results,fields){
                        if (err) console.log(err)
                        res.json(results)
                    })
            }
    })
})
// postRouter.route('/newpost').post(function(req,res){}) // route for create a new post
// postRouter.route('/checkpost').get(function(req,res){})// route for expert can check and publish new post


module.exports = postRouter // export router to use in server