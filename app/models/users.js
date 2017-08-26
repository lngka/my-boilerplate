"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mySchema = new Schema({
    "local": {
        "username": {
            "type": String,
            "unique": true
        },
        "hashedPassword": String,
        "email": String
    }
});

module.exports = mongoose.model("User", mySchema);
