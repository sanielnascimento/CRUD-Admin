import "express-async-errors";
import express, { Application, json } from "express";
import { loginRoutes, usersRoutes } from "./routers";
import { errorHandler } from "./errors";

export const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);
app.use("/login", loginRoutes);

app.use(errorHandler);
