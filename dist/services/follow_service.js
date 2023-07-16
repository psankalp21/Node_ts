"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.follow = void 0;
const follow_models_1 = require("../database/follow_models");
const user_model_1 = require("../database/user_model");
async function follow(user_email, following_email) {
    const user = await user_model_1.User.findOne({
        where: {
            email: following_email,
        },
    });
    if (!user) {
        throw new Error('User does not exist');
    }
    const existingFollow = await follow_models_1.Follow.findOne({
        where: {
            user_email,
            following_email,
        },
    });
    if (existingFollow) {
        throw new Error('Already following');
    }
    await follow_models_1.Follow.create({
        user_email,
        following_email,
    });
}
exports.follow = follow;
//# sourceMappingURL=follow_service.js.map