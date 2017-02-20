"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const mapStateToProps = (state, ownProps) => ({});
const mapDispatchToProps = (dispatch) => ({});
class App extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("div", { className: "app-bar" },
                React.createElement("h3", null, "Do.Cards")),
            React.createElement("div", null, this.props.children));
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(App);
//# sourceMappingURL=app.js.map