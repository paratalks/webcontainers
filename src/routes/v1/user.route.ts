import express from "express";
import { githubLinkUpload } from "../../controllers/user.controller";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({
    message: "[server] API Health Checkup : User Routes :: GOOD",
  });
});

router.route("/githubLink").post(githubLinkUpload);
export default router;
