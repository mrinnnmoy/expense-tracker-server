const mongoose = require("mongoose");

mongoose.set("strictQuery", false);
const conn = mongoose
  .connect(process.env.ATLAS_URI)

  .then((db) => {
    console.log("Database Connected");
    return db;
  })
  .catch((err) => {
    console.log("Connection error");
  });

module.exports = conn;
