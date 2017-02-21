"use strict";
const React = require("react");
const CardContainer_1 = require("../containers/CardContainer");
class CardComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        const subCards = this.props.subCards.map((c, idx) => c &&
            React.createElement("li", null,
                React.createElement(CardContainer_1.default, { key: idx, card: c })));
        return React.createElement("div", { className: "card-element" },
            React.createElement("input", { value: this.props.title, onChange: this.titleChanged.bind(this) }),
            React.createElement("button", { onClick: this.props.remove, className: "close-button" }, "\u2716"),
            React.createElement("ul", null, subCards),
            React.createElement("button", { onClick: this.props.addSubCard },
                React.createElement("span", { className: "plus" }, "+"),
                "sub card"));
    }
    titleChanged(e) {
        this.props.titleChanged(e.target.value);
    }
}
exports.CardComponent = CardComponent;
//# sourceMappingURL=CardComponent.js.map