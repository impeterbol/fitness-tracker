const express = require("express");
const mongoose = require("mongoose");
var morgan = require('morgan');
const path = require("path");

const PORT = process.env.PORT || 8000;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));//if false then parse only strings
app.use(express.json());

app.use(express.static("public"));
app.use(morgan('dev'));//log all the requests to the console

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

// routes
app.use(require("./public/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});