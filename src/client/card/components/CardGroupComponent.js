"use strict";
const React = require("react");
const CardContainer_1 = require("../containers/CardContainer");
const CardGroupContainer_1 = require("../containers/CardGroupContainer");
class CardGroupComponent extends React.Component {
    render() {
        const subCardGroups = this.props.subCardGroups.map((cg) => cg &&
            React.createElement("div", { key: cg.id },
                React.createElement(CardGroupContainer_1.default, { cardGroup: cg })));
        return React.createElement("div", { className: "card-group-element" },
            React.createElement("div", null,
                React.createElement("input", { value: this.props.title, onChange: this.titleChanged.bind(this) }),
                React.createElement("button", { onClick: this.props.remove, className: "close-button" }, "\u2716")),
            React.createElement("div", null,
                React.createElement("button", { onClick: this.props.addSubCardGroup },
                    React.createElement("span", { className: "plus" }, "+"),
                    "sub card group")),
            React.createElement("div", { style: { float: "right" } }, subCardGroups),
            React.createElement("div", { style: { float: "left" } }, this.props.cards.map((c, idx) => c &&
                React.createElement(CardContainer_1.default, { key: idx, card: c }))),
            React.createElement("div", { style: { clear: "both" } }));
    }
    titleChanged(e) {
        this.props.titleChanged(e.target.value);
    }
}
exports.CardGroupComponent = CardGroupComponent;
//# sourceMappingURL=CardGroupComponent.js.map