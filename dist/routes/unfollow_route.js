"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const unfollow_controller_1 = require("../controllers/unfollow_controller");
const router = express_1.default.Router();
router.post('/unfollow', unfollow_controller_1.unfollow_controller);
exports.default = router;
//# sourceMappingURL=unfollow_route.js.map