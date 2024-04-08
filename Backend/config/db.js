const mongoose = require("mongoose");
//const colors = require("colors");
const User = require("../models/userModel");

const connectDB = () => {
  mongoose
    .connect(
      "mongodb+srv://smrutidongare2310:smruti@chatapp.u4bbtvu.mongodb.net/?retryWrites=true&w=majority&appName=chatapp"
    )
    .then(() => {
      console.log("DB connection successful.");
    })
    .catch((err) => {
      console.log(`DB connection error:${err}`);
    });
};

module.exports = connectDB;
