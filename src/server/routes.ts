import * as express from "express";
import * as path from "path";

export function Routes(app: express.Application) {
    app.get("/api/", (req: express.Request, res: express.Response) => {
        res.send("Hello World");
    });
    // TODO: forward routes to react
    // app.get("*", (req: express.Request, res: express.Response) => {
    //     const parentDir = path.resolve(__dirname, "../");
    //     res.sendfile(path.join(parentDir, "/public/index.html"));
    // });
}
