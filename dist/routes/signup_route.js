"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_controller_1 = require("../controllers/signup_controller");
const router = express_1.default.Router();
router.post('/signup', signup_controller_1.signup);
exports.default = router;
//# sourceMappingURL=signup_route.js.map