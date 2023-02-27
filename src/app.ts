import "express-async-errors";
import express, { Application, json } from "express";
import { router } from "./routers";
import { errorHandler } from "./errors";

export const app: Application = express();

app.use(json());

app.use("", router);

app.use(errorHandler);
