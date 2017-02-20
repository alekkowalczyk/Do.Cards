"use strict";
const React = require("react");
class CardComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement("div", { style: { border: "solid 1px black", margin: "5px", padding: "5px" } },
            React.createElement("div", null, "Card"),
            React.createElement("input", { value: this.props.title, onChange: this.titleChanged.bind(this) }),
            React.createElement("button", { onClick: this.props.remove }, "X"));
    }
    titleChanged(e) {
        this.props.titleChanged(e.target.value);
    }
}
exports.CardComponent = CardComponent;
//# sourceMappingURL=CardComponent.js.map