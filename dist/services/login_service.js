"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginservice = void 0;
const user_model_1 = require("../database/user_model");
async function loginservice(email, password) {
    try {
        const user = await user_model_1.User.findOne({ where: { email } });
        if (!user) {
            throw new Error('User not found');
        }
        if (user.password !== password) {
            throw new Error('Invalid password');
        }
        return user;
    }
    catch (error) {
        throw new Error('An error occurred during login');
    }
}
exports.loginservice = loginservice;
module.exports =
    {
        loginservice
    };
//# sourceMappingURL=login_service.js.map