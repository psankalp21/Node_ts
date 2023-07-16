"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findProfile_controller = void 0;
const find_followers_1 = require("../services/find_followers");
async function findProfile_controller(req, res) {
    try {
        console.log("find follower started");
        const { name } = req.body;
        const user = await (0, find_followers_1.find_profile)(name);
        console.log(user);
        if (user.length == 0) {
            res.json({ result: "No user found" });
        }
        //   const formattedUsers = user.map(({ name, dob }) => ({ name, dob }));
        res.json({ result: user });
    }
    catch (error) {
        console.log("error called in contr");
        res.send("Something went wrong");
    }
}
exports.findProfile_controller = findProfile_controller;
//# sourceMappingURL=find_profile.js.map