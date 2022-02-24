exports.setupSession = (req, res) => {
  //validate session
  nameing = "patrick";
  console.log(nameing);
  if (!req.body.name) return res.send("user");
  //   find in database
  argon2
    .verify(req.body.password, process.env.hashed_password)
    .then((user) => {
      ses.assignSession(email, (req, res));
    })
    .catch((err) => {
      res.send("wrong password");
    });
  req.session.users = "patrick";

  res.send(req.session.users);
};
