"use strict";
const React = require("react");
class CardComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return React.createElement("div", { style: { border: "solid 1px black" } },
            React.createElement("p", null, "Card"),
            React.createElement("input", { value: this.props.title, onChange: this.titleChanged.bind(this) }),
            React.createElement("button", { onClick: this.props.remove }, "X"));
    }
    titleChanged(e) {
        this.props.titleChanged(e.target.value);
    }
}
exports.CardComponent = CardComponent;
//# sourceMappingURL=CardComponent.js.map