"use strict";
function Routes(app) {
    app.get("/api/", (req, res) => {
        console.log(req.session);
        res.send("Hello World2");
    });
    // TODO: forward routes to react
    // app.get("*", (req: express.Request, res: express.Response) => {
    //     const parentDir = path.resolve(__dirname, "../");
    //     res.sendfile(path.join(parentDir, "/public/index.html"));
    // });
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map