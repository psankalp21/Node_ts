"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search_controller = void 0;
const search_services_1 = require("../services/search_services");
async function search_controller(req, res) {
    try {
        console.log("search controller called");
        const { name } = req.body;
        const users = await (0, search_services_1.search)(name);
        if (users.length === 0) {
            res.json({ result: "No user found" });
        }
        else {
            const formattedUsers = users.map(({ name, email, follows }) => ({
                name,
                email,
                following: follows ? follows.map((followedUser) => followedUser.following_email) : [],
            }));
            console.log("i got it here");
            res.json({ result: formattedUsers });
        }
    }
    catch (error) {
        console.log(error);
        res.send("Something went wrong");
    }
}
exports.search_controller = search_controller;
//# sourceMappingURL=search_controller.js.map