"use strict";

// requirements
const express  = require("express");
const path = require("path");
const dotenv   = require("dotenv");
const mongoose = require("mongoose");
const handlebars = require("express-handlebars");
const route = require("./app/routes/index.js");

// init environment
dotenv.load();

// init database connection
mongoose.connect(process.env.MONGO_URI, {"useMongoClient": true});

// init app
const app = express();

// init view engine
app.set("views", path.join(process.cwd(), "views")); //default views folder
app.set("view engine", ".hbs"); //default file extension used for looking up views
app.engine("hbs", handlebars({"extname": ".hbs", "layoutsDir": "views/layouts", "defaultLayout": "main"})); //default engine used for .hbs files

// init static directory
app.use("/public", express.static(path.join(process.cwd(), "public")));

// routes configuration
route(app);

// start app
var port = process.env.PORT;
app.listen(port || 3000, function() {
    console.log("Listening on port: " + port || "3000");
});
