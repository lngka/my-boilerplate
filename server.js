"use strict";

// requirements
const express  = require("express");
const dotenv   = require("dotenv");
const mongoose = require("mongoose");

// init environment
dotenv.load();

// init database connection
mongoose.connect(process.env.MONGO_URI, {"useMongoClient": true});

// init app
const app = express();



// start app
var port = process.env.PORT;
app.listen(port || 3000, function() {
    console.log("Listening on port: " + port || "3000");
});
