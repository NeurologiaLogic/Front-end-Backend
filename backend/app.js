var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors");
var cookieSession = require("cookie-session");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();
app.set("trust proxy", 1);
app.use(
  cookieSession({
    name: "session",
    keys: ["key1", "ey2"],
    //https by default
    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  })
);
app.use(cookieParser());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(
  cors({
    origin: ["https://localhost:8080", "https://192.168.1.6:8080"],
    credentials: true,
  })
);

app.use("/api", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
