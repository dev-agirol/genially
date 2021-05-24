// router
import { Router } from "express";

const routesGenially = Router();

// Imports "Ctrs"
import *  as geniallyController from "../controllers/genially";

// Endpoints

// Genially routes
routesGenially.get("/geniallies-counter", geniallyController.getCounterGenially);
routesGenially.get("/geniallies", geniallyController.getAllGenially);
routesGenially.post("/geniallies", geniallyController.createGenially);
routesGenially.patch("/genially-rename/:id", geniallyController.renameGenially);
routesGenially.delete("/geniallies/:id", geniallyController.deleteGenially);


export default routesGenially;