import bodyParser from "body-parser";
import compression from "compression";
import express from "express";
import lusca from "lusca";

// config
import { config } from "../env/config";

// Connectors
import { clientConnect } from "../contexts/core/genially/infrastructure/mongoRepository/mongoDb.connector";

// Controllers (route handlers)
import * as healthController from "./controllers/health";
import * as errorsController from "./controllers/errors";

// Repositories
import MongoGeniallyRepository from "../contexts/core/genially/infrastructure/MongoGeniallyRepository";
import InMemoryGeniallyRepository from "../contexts/core/genially/infrastructure/InMemoryGeniallyRepository";

// Routes
import routes from "./routes";



// Create Express server
const app = express();

export const repo = config.repository === "mongo" ?
  new MongoGeniallyRepository() :
  new InMemoryGeniallyRepository();


config.repository === "mongo" ? clientConnect() : null;

// Express configuration
app.set("port", process.env.PORT || 3000);
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(lusca.xframe("SAMEORIGIN"));
app.use(lusca.xssProtection(true));

// Primary app routes
app.get("/", healthController.check);

// routes
app.use(routes);


// Errors
app.use(errorsController.errors);

// Repository


export default app;
