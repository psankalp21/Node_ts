"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const login_controller_1 = require("../controllers/login_controller");
const router = express_1.default.Router();
router.post('/login', login_controller_1.login);
exports.default = router;
//# sourceMappingURL=login_route.js.map