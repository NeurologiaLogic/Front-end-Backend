exports.setupSession = async (req, res, next) => {
  const email = await req.body.email;
  const password = await req.body.password;
  const hashed_password = await argon2.hash(
    password,
    process.env.hashed_password
  );
  //save it
  // res.status(200).send(req.session.email);
  //login confirm
  //if fail return to login
};
