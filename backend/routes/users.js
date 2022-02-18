var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  const token = req.cookies.name;
  res.status(200).send(token);
});
module.exports = router;
