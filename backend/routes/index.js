const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const argon2 = require("argon2");
const { generateKeyPair } = require("crypto");
require("dotenv").config();
const { register, setupSession, login, logout } = require("../validate/link");
// const session = require("../models/sessions");
// const mongoose = require("mongoose");
// const csrf = require("csrf");
// const csrfProtection = csrf({cookie:{httpOnly: true}})

//generate model class
// const sessions = mongoose.model("session", session);

//base link
// router.get("/", (req, res, next) => {
//   res.status(200).send("api call");
// next();
// });

//KEY test for
//added argon2 and jwt
// router.get("/key", (req, res) => {
//   generateKeyPair(
//     "rsa",
//     {
//       modulusLength: 2048,
//       publicKeyEncoding: {
//         type: "spki",
//         format: "pem",
//       },
//       privateKeyEncoding: {
//         type: "pkcs8",
//         format: "pem",
//         cipher: "aes-256-cbc",
//         passphrase: "top secret",
//       },
//     },
//     (err, publicKey, privateKey) => {
//       // Handle errors and use the
//       // generated key pair.
//       res.send(publicKey);
//     }
//   );
// });

//LOGIN
router.post("/login", login);

//REGISTER
router.post("/register", register);

//LOGOUT
router.post("/logout", logout);

module.exports = router;
