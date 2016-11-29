"use strict";
const React = require("react");
const ReactDOM = require("react-dom");
const react_redux_1 = require("react-redux");
const react_router_1 = require("react-router");
const react_router_redux_1 = require("react-router-redux");
const configureStore_1 = require("./app/store/configureStore");
const routes_1 = require("./app/store/routes");
const initialStore = configureStore_1.default({
    cardsRoot: {
        cards: [],
        cardGroups: [],
    },
});
const history = react_router_redux_1.syncHistoryWithStore(react_router_1.browserHistory, initialStore);
ReactDOM.render(React.createElement("div", null,
    React.createElement(react_redux_1.Provider, { store: initialStore },
        React.createElement(react_router_1.Router, { history: history }, routes_1.default))), document.getElementById("root"));
//# sourceMappingURL=index.js.map