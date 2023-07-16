"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.follow_controller = void 0;
const follow_service_1 = require("../services/follow_service");
const user_model_1 = require("../database/user_model");
async function follow_controller(req, res) {
    try {
        const { user_email, following_email } = req.body;
        // Check if the user being followed exists
        const followingUser = await user_model_1.User.findOne({
            where: {
                email: following_email,
            },
        });
        if (!followingUser) {
            res.status(404).json({ message: "User does not exist" });
            return;
        }
        await (0, follow_service_1.follow)(user_email, following_email);
        res.json({ message: `You followed ${following_email}` });
    }
    catch (error) {
        console.log(`error ${error}`);
        if (error.message === 'Already following') {
            res.status(403);
            res.send({ message: "Already Following" });
            console.log("Already following");
        }
        else {
            res.status(500);
            res.send({ status: 'error', message: "Something went wrong" });
        }
    }
}
exports.follow_controller = follow_controller;
//# sourceMappingURL=follow_controller.js.map