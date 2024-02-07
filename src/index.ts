import express, { Express } from "express";
import "./config/dbConfig";
import bodyParser from "body-parser";
import cors from "cors";

const routes = require("./routes");
const app: Express = express();
app.use(bodyParser.json());
app.use(cors());
app.use(routes);
app.listen(3001);
