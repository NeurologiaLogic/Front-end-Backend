const fs = require("fs");
module.exports = {
  devServer: {
    key: fs.readFileSync("C://Users//oensi//localhost+1-key.pem"),
    cert: fs.readFileSync("C://Users//oensi//localhost+1.pem"),
    https: true,
  },
};
