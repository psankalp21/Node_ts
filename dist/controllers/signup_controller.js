"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signup = void 0;
const user_model_1 = require("../database/user_model");
async function signup(req, res) {
    try {
        const { name, email, password, dob } = req.body;
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
    catch (error) {
        console.error('Error occurred during signup:', error);
        res.status(500).json({
            message: 'An error occurred during signup'
        });
    }
}
exports.signup = signup;
//# sourceMappingURL=signup_controller.js.map