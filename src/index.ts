import express, { Express, Request, Response } from "express";
import "./config/dbConfig";
import dotenv from "dotenv";

const routes = require("./routes");
const app: Express = express();

app.use(routes);
app.listen(3000);
