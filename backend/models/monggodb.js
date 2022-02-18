require("dotenv").config();
const app = require("../app");
const mongoose = require("mongoose");

function connectIt() {
  mongoose
    .connect(process.env.Db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((client) => {
      return client.connection.getClient();
    })
    .catch((e) => {
      console.log(err);
    });

  // .then(() => console.log("connect successfull"))
  // .catch((err) => console.log(err));
}
module.exports = { connectIt };

// function assignSession(client) {
//   app.use(
//     session({
//       secret: "hwehwehwe",
//       resave: false,
//       saveUninitialized: false,
//       cookie: {},
//       store: new MongoStore({
//         client: client,
//         collectionName: "sessions",
//         ttl: 24 * 60 * 60,
//         mongoOptions: {
//           useNewUrlParser: true,
//           useUnifiedTopology: true,
//         },
//       }),
//     })
//   );
// }
