// const { app } = require("firebase-admin");
const functions = require("firebase-functions");
const express = require("express");
const app = express();
// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

app.listen(6000, (req, res) => {});

// app.get("/key", (req, res) => {
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

// exports.app = functions.https.onRequest((req, res) => {
// const hours = new Date().getHours() % 12;
// res.status(200).send(key);

// });
exports.app = functions.https.onRequest(app);

//for Nodejs
// exports.app = functions.https.onRequest(app)

//forsomething
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
