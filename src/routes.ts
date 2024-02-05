import express from "express";
const annotationsControllers = require("./controllers/annotationsControllers");
const priorityControllers = require("./controllers/priorityControllers");
const contentsControllers = require("./controllers/contentsControllers");

const routes = express.Router();

routes.get("/annotations", annotationsControllers.read);
routes.post("/annotations", annotationsControllers.create);
routes.delete("/annotations/:id", annotationsControllers.delete);

routes.get("/priorities", priorityControllers.read);
routes.post("/priorities/:id", priorityControllers.update);

routes.post("/contents/:id", contentsControllers.update);

module.exports = routes;
