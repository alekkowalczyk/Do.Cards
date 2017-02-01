import * as express from "express";
import * as session from "express-session";
const app = express();

import { Routes } from "./routes";

app.use(session({
    secret: "Do.Cards123",
    cookie: { maxAge: 60000 }
}));

Routes(app);

app.use(express.static("public"));

app.listen(3000);
console.log("listening on port 3000 :-))))");
