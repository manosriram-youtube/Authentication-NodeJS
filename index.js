const express = require("express");
const app = express();
const port = 5000;
const mongoose = require("mongoose");
const bcryptjs = require("bcryptjs");

app.use(express.json());

const User = require("./User.js");

app.post("/register", async (req, res) => {
    try {
        const { email, password, name } = req.body;

        const user = await User.findOne({ email });
        if (user) {
            return res.json({ message: "User already registered" });
        } else {
            // Hash the password;
            let hashedPassword;
            let salt = bcryptjs.genSaltSync(10);
            hashedPassword = bcryptjs.hashSync(password, salt);

            const newUser = new User({
                email,
                password: hashedPassword,
                name
            });
            newUser.save();

            return res.json({ message: "User created", user: newUser });
        }
    } catch (err) {
        console.log(err);
    }
});

mongoose
    .connect(
        "mongodb+srv://auth:auth1234@auth.ulrpt.mongodb.net/auth?retryWrites=true&w=majority"
    )
    .then(() => console.log("Connected"))
    .catch(err => console.log(err));

app.listen(port, () => console.log(`Server at ${port}`));
