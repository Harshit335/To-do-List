const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const ejs = require("ejs");
const day = require(__dirname + "date.js")

var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItems = [];

app. set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", function(req, res){


  res.render("list", {listTitle: day, newListItems: items});
});

app.post("/", function(req, res){
  var item = req.body.newItem;

  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }
})

app.get("/work", function(req, res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});


app.listen(3000, function(){
  console.log("Running");
})
