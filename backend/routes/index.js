var express = require("express");
var router = express.Router();

/* GET home page. */
// const parse = (req) => {};
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });
router.post("/", (req, res, next) => {
  // if (req.body.name === "patrick") {
  // res.writeHead(200, {
  //   "Set-Cookie": `punya=${req.body.name}`,
  //   "Content-Type": `text/plain`,
  // });
  res.cookie("name", "hihi", { maxAge: 900000 });
  // res.end("dune");
  // }
  //next penting banget
  next();
});
router.get("/", (req, res, next) => {
  res.send("hi");
  next();
});

module.exports = router;
