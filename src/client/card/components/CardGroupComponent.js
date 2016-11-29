"use strict";
const React = require("react");
const CardContainer_1 = require("../containers/CardContainer");
class CardGroupComponent extends React.Component {
    render() {
        return React.createElement("div", { style: { border: "solid 1px gray" } },
            this.props.cards.map((c) => c &&
                React.createElement(CardContainer_1.default, { key: c.id, cardId: c.id })),
            React.createElement("button", { onClick: this.props.addEmptyCard }, "Add"));
    }
}
exports.CardGroupComponent = CardGroupComponent;
//# sourceMappingURL=CardGroupComponent.js.map