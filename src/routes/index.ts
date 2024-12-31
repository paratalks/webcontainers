import express from "express";
const router = express.Router();
import routerV1 from "./v1";

// API checkup
router.get("/", (req, res) => {
  res.status(200).send({
    message: "[server]: API Health Checkup for root :: GOOD",
  });
});

// v1 routes
router.use("/api/v1", routerV1);
export default router;
