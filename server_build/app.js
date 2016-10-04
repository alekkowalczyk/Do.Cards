"use strict";
var express = require('express');
var app = express();
var routes_1 = require('./routes');
routes_1.Routes(app);
app.use(express.static("public"));
app.listen(3000);
console.log("listening");

//# sourceMappingURL=maps/app.js.map
