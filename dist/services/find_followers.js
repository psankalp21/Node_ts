"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_profile = void 0;
const sequelize_1 = require("sequelize");
const user_model_1 = require("../database/user_model");
const follow_models_1 = require("../database/follow_models");
async function find_profile(name) {
    console.log("find follower service started");
    const followers = await user_model_1.User.findAll({
        attributes: ['name', 'dob'],
        include: [
            {
                model: follow_models_1.Follow,
                attributes: [],
                where: {
                    following_email: {
                        [sequelize_1.Op.eq]: sequelize_1.Sequelize.literal(`(SELECT email FROM "user" WHERE name = '${name}')`),
                    },
                },
            },
        ],
    });
    return followers;
}
exports.find_profile = find_profile;
//# sourceMappingURL=find_followers.js.map