const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String
    }
});

module.exports = User = mongoose.model("UserModel", User);
