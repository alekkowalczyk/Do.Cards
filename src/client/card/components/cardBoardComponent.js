"use strict";
const React = require("react");
const CardGroupContainer_1 = require("../containers/CardGroupContainer");
class CardBoardComponent extends React.Component {
    render() {
        return React.createElement("div", { style: { border: "solid 1px gray", padding: "5px" } },
            this.props.cardGroups.map((cg) => cg &&
                React.createElement("div", { key: cg.id, style: { float: "left" } },
                    React.createElement(CardGroupContainer_1.default, { cardGroup: cg }))),
            React.createElement("button", { onClick: this.props.addEmptyCardGroup }, "Add card group"),
            React.createElement("div", { style: { clear: "both" } }));
    }
}
exports.CardBoardComponent = CardBoardComponent;
//# sourceMappingURL=cardBoardComponent.js.map