import express, { Application, json } from "express";
import { usersRoutes } from "./routers";

export const app: Application = express();
app.use(json());

app.use("/users", usersRoutes);
