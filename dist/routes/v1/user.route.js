"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("../../controllers/user.controller");
const router = express_1.default.Router();
router.get("/", (req, res) => {
    res.status(200).send({
        message: "[server] API Health Checkup : User Routes :: GOOD",
    });
});
router.route("/githubLink").post(user_controller_1.githubLinkUpload);
exports.default = router;
