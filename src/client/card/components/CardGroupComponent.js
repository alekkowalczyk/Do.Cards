"use strict";
const React = require("react");
const CardContainer_1 = require("../containers/CardContainer");
class CardGroupComponent extends React.Component {
    render() {
        return React.createElement("div", { style: { border: "solid 1px gray" } },
            React.createElement("div", null, "Card group"),
            React.createElement("div", null,
                React.createElement("input", { value: this.props.title, onChange: this.titleChanged.bind(this) }),
                React.createElement("button", { onClick: this.props.remove }, "X")),
            this.props.cards.map((c) => c &&
                React.createElement(CardContainer_1.default, { key: c.id, card: c })),
            React.createElement("button", { onClick: this.props.addEmptyCard }, "Add"));
    }
    titleChanged(e) {
        this.props.titleChanged(e.target.value);
    }
}
exports.CardGroupComponent = CardGroupComponent;
//# sourceMappingURL=CardGroupComponent.js.map