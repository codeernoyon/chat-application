const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

const app = express();
dotenv.config();

// Database connection
mongoose
  .connect(process.env.MONGO_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB connection Successful"))
  .catch((err) => console.log(err));

// Request parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// View Engin SetUP
app.set("view engine", "ejs");

// set statice folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies
app.use(cookieParser(process.env.COOKIE_SECRET));

// Routing setup

// Error handling

app.listen(process.env.PORT, () => {
  console.log(`app listen port: ${process.env.PORT}`);
});
