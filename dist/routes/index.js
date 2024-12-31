"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const v1_1 = __importDefault(require("./v1"));
// API checkup
router.get("/", (req, res) => {
    res.status(200).send({
        message: "[server]: API Health Checkup for root :: GOOD",
    });
});
// v1 routes
router.use("/api/v1", v1_1.default);
exports.default = router;
