"use strict";
const express = require("express");
const app = express();
const routes_1 = require("./routes");
routes_1.Routes(app);
app.use(express.static("public"));
app.listen(3000);
console.log("listening on port 3000 :-))))");
//# sourceMappingURL=app.js.map