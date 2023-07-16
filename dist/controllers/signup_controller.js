"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const user_model_1 = require("../database/user_model");
async function signup(req, res) {
    try {
        const { name, email, password, dob } = req.body;
        var pass = password;
        if (pass.length < 6) {
            res.send({ Error: "Password length should be more that 6 characters." });
            console.log("password length less than 6");
        }
        else {
            const user = await user_model_1.User.create({
                name,
                email,
                password,
                dob
            });
            res.status(201).json({
                message: 'Signup successful',
                user
            });
        }
    }
    catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            res.status(403);
            res.send({ message: "User already exists" });
            console.log("unique email expected");
        }
        else {
            res.status(500);
            res.send({ status: 'error', message: "Something went wrong" });
        }
    }
}
exports.signup = signup;
//# sourceMappingURL=signup_controller.js.map