import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes";

// config
dotenv.config();
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const PORT = process.env.port || "8080";
app.listen(PORT, () => {
  console.log("[server]: Server is listening at localhost:8080");
});

//routes
app.use(routes);
