"use strict";
const React = require("react");
const CardComponent_1 = require("./CardComponent");
class CardGroupComponent extends React.Component {
    render() {
        return React.createElement("div", { style: { border: "solid 1px gray" } },
            this.props.cards.map((c) => c &&
                React.createElement(CardComponent_1.CardComponent, { key: c.id, title: c.title, titleChanged: (newTitle) => this.props.editCardTitle(c, newTitle), remove: () => this.props.removeCard(c) })),
            React.createElement("button", { onClick: this.props.addEmptyCard }, "Add"));
    }
}
exports.CardGroupComponent = CardGroupComponent;
//# sourceMappingURL=CardGroupComponent.js.map