"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const signup_route_1 = __importDefault(require("./signup_route"));
const login_route_1 = __importDefault(require("./login_route"));
const follow_routes_1 = __importDefault(require("./follow_routes"));
const unfollow_route_1 = __importDefault(require("./unfollow_route"));
const search_routes_1 = __importDefault(require("./search_routes"));
const router = express_1.default.Router();
router.use('/auth', signup_route_1.default, login_route_1.default, follow_routes_1.default, unfollow_route_1.default, search_routes_1.default);
exports.default = router;
//# sourceMappingURL=index.js.map