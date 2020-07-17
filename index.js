const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");

const User = require("./User.js");

mongoose
    .connect(
        "mongodb+srv://auth:auth1234@auth.ulrpt.mongodb.net/auth?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server at ${port}`));
