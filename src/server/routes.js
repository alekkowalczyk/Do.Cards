"use strict";
function Routes(app) {
    app.get("/api/", (req, res) => {
        res.send("Hello World");
    });
    // TODO: forward routes to react
    // app.get("*", (req: express.Request, res: express.Response) => {
    //     const parentDir = path.resolve(__dirname, "../");
    //     res.sendfile(path.join(parentDir, "/public/index.html"));
    // });
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map