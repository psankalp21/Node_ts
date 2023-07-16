"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const find_profile_1 = require("../controllers/find_profile");
const router = express_1.default.Router();
router.post('/getFOllowers', find_profile_1.findProfile_controller);
exports.default = router;
//# sourceMappingURL=getFollowers_routes.js.map