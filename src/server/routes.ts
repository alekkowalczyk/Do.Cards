import * as express from "express";
import { Request } from "./utils/typings";
import * as path from "path";

export function Routes(app: express.Application) {
    app.get("/api/", (req: Request, res: express.Response) => {
        console.log(req.session);
        res.send("Hello World2");
    });
    // TODO: forward routes to react
    // app.get("*", (req: express.Request, res: express.Response) => {
    //     const parentDir = path.resolve(__dirname, "../");
    //     res.sendfile(path.join(parentDir, "/public/index.html"));
    // });
}
