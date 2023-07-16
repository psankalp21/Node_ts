"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login_service_1 = require("../services/login_service");
async function login(req, res) {
    try {
        const { email, password } = req.body;
        const user = await (0, login_service_1.loginservice)(email, password);
        res.json({ message: 'Login successful', user });
    }
    catch (error) {
        console.error('Error occurred during login:', error);
        res.status(500).json({ message: 'An error occurred during login' });
    }
}
exports.login = login;
//# sourceMappingURL=login_controller.js.map