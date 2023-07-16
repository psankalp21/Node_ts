"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const follow_controller_1 = require("../controllers/follow_controller");
const router = express_1.default.Router();
router.post('/follow', follow_controller_1.follow_controller);
exports.default = router;
//# sourceMappingURL=follow_routes.js.map