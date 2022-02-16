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
  // req.session.credentials = "patrick";

  // res.cookie("name", "hihi", { maxAge: 3600, httpOnly: true, secure: true });
  const user = "hi";
  const password = "ho";
  // req.session.name = user;
  // console.log(req.session.name);
  // req.session.name = "mother";
  // req.session = null;
  req.session.name = "eyy";
  console.log(req.session);
  res.status(200).end();
  next();
});
router.get("/", (req, res, next) => {
  const token = req.session.credential;
  req.session.maxAge = 3600;
  if (token === "patrick") res.status(200).send(token);
  else res.status(404).send("credentials not valid");
  next();
});

module.exports = router;
