"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow = void 0;
const follow_models_1 = require("../database/follow_models");
async function unfollow(uemail, target_email) {
    const existingFollow = await follow_models_1.Follow.findOne({
        where: {
            user_email: uemail,
            following_email: target_email,
        },
    });
    if (!existingFollow) {
        throw new Error('You are not following this user');
    }
    await follow_models_1.Follow.destroy({
        where: {
            user_email: uemail,
            following_email: target_email,
        },
    });
}
exports.unfollow = unfollow;
//# sourceMappingURL=unfollow_service.js.map