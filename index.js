var express = require("express");
var app = express();
const PORT = 3000
var path = require('path');



app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, 'assets')));
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/tech", function (req, res) {
  res.render("techs");
});
app.get("/lang", function (req, res) {
  res.render("lang");
});

app.listen(`${PORT}`);
console.log(`%c [SYSTEM] Server is listening on port ${PORT}` , 'color: #1c87c9; font-size: 18px' );
console.log(`%c [SYSTEM] No Errors found`, 'color: #1c87c9; font-size: 18px');