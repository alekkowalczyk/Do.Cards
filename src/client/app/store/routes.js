"use strict";
const React = require("react");
const react_router_1 = require("react-router");
const containers_1 = require("../containers");
const containers_2 = require("../containers");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Route, { path: "/", component: containers_1.App },
    React.createElement(react_router_1.IndexRoute, { component: containers_2.CardBoardPage }),
    React.createElement(react_router_1.Route, { path: "about", component: containers_1.AboutPage })));
//# sourceMappingURL=routes.js.map