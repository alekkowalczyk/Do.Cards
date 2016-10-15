

import * as express from "express";
const app = express();

import { Routes } from "./routes";
Routes(app);

app.use(express.static("public"));

app.listen(3000);
console.log("listening on port 3000 :-))))");
