const mongoose = require("mongoose");
const User = require("../models/userSchema");
const argon2 = require("argon2");
exports.register = async (req, res) => {
  const reslt = User.findOne({ email: req.body.email });
  if (reslt) {
    return res.send("exist");
  }
  const hashed_password = await argon2.hash(
    req.body.password,
    process.env.hashed_password
  );
  console.log(hashed_password);
  const user = await User.create({
    email: req.body.email,
    password: hashed_password,
    name: "parick",
  });
  await user
    .save()
    .then((rest) => {
      console.log(rest);
    })
    .catch((err) => {
      console.log(err);
    });
  await res.send("user created");
};
