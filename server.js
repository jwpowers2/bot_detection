// bot detection 

var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");
var app = express();
app.use(express.static(__dirname + "/static"));
app.use(session({secret: 'stuff'}));
app.use(bodyParser.urlencoded({extended: true}));
app.set('views',__dirname + '/views');
app.set('view engine','ejs');


app.get("/", function (req, res){

    res.render('index');

})

app.post("/submit", function (req, res){
    
    req.session.name = req.body.name;
    req.session.loc = req.body.loc;
    req.session.lang = req.body.lang;
    req.session.comment = req.body.comment;

    res.redirect('/result');

})

app.post("/tracking", function (req, res){
    
    //req.session.name = req.body.data;
    console.log(req.body.data);
    res.redirect('/result');

})

app.get("/result", function (req, res){

    var response = {

      name: req.session.name,
      loc: req.session.loc,
      lang: req.session.lang,
      comment: req.session.comment
    }
    res.render('result',{result:response});

})
app.listen(8000, function() {
  console.log("listening on port 8000");
})


