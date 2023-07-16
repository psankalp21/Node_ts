"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unfollow_controller = void 0;
const unfollow_service_1 = require("../services/unfollow_service");
async function unfollow_controller(req, res) {
    try {
        const { user_email, following_email } = req.body;
        await (0, unfollow_service_1.unfollow)(user_email, following_email);
        res.json({ message: `You unfollowed ${following_email}` });
    }
    catch (error) {
        console.log(`error ${error}`);
        if (error.message === 'You are not following this user') {
            res.status(403);
            res.send({ message: "You are not following this user" });
            console.log("You are not following this user");
        }
        else {
            res.status(500);
            res.send({ status: 'error', message: "Something went wrong" });
        }
    }
}
exports.unfollow_controller = unfollow_controller;
//# sourceMappingURL=unfollow_controller.js.map