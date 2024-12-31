"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.githubLinkUpload = void 0;
const githubLinkUpload = (req, res) => {
    try {
        const url = req.body.url;
        console.log(`recieved the url = ${url}`);
    }
    catch (e) { }
};
exports.githubLinkUpload = githubLinkUpload;
