const express = require("express");
const router = express.Router();
// const session = require("../models/sessions");
// const mongoose = require("mongoose");
// const csrf = require("csrf");
// const csrfProtection = csrf({cookie:{httpOnly: true}})

//generate model class
// const sessions = mongoose.model("session", session);

//base link
router.get("/", (req, res, next) => {
  res.status(200).end();
  // next();
});

//GETUSER
router.post("/getuser", (req, res) => {
  //validate session
  // if (!req.body.name) return res.send("user");
  req.session.users = "patrick";
  res.send(req.session.users);
});

//LOGIN
router.post("/login", (req, res, next) => {
  req.session.email = req.body.Email;
  req.session.password = req.body.Password;
  res.status(200).send(req.session.email);
  //login confirm
  //if fail return to login
});

//LOGOUT
router.post("/logout", (req, res) => {
  req.session.email = req.body.Email;
  req.session.password = req.body.Password;
  res.status(200).send(req.session.email);
});
module.exports = router;
