const path = require("path");

module.exports = {
  entry: path.join(__dirname, "../index.js"),
  watch: true,
  mode: "development",
  node: {
    global: true,
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../dist"),
  },
};