"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const follow_models_1 = require("../database/follow_models");
const user_model_1 = require("../database/user_model");
const sequelize_1 = require("sequelize");
async function search(target_name) {
    try {
        console.log("search services called");
        const users = await user_model_1.User.findAll({
            where: {
                name: {
                    [sequelize_1.Op.like]: `%${target_name}%`,
                },
            },
            include: [
                {
                    model: follow_models_1.Follow,
                    as: 'follows',
                    attributes: ['following_email'],
                },
            ],
        });
        return users;
    }
    catch (error) {
        console.log("failed to search users", error.message);
        throw new Error('Failed to search users');
    }
}
exports.search = search;
//# sourceMappingURL=search_services.js.map