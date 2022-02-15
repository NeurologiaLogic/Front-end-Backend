var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");

var indexRouter = require("./routes/index");
// var usersRouter = require('./routes/users');

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors({ origin: "https://localhost:8080", credentials: true }));

app.use("/", indexRouter);
// app.use('/users', usersRouter);

app.listen("6969", (req, res) => {
  console.log("6969");
});

module.exports = app;
