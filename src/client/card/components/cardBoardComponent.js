"use strict";
const React = require("react");
const CardGroupContainer_1 = require("../containers/CardGroupContainer");
class CardBoardComponent extends React.Component {
    render() {
        return React.createElement("div", { style: { border: "solid 1px gray", float: "left" } },
            this.props.cardGroups.map((cg) => cg &&
                React.createElement(CardGroupContainer_1.default, { key: cg.id, cardGroup: cg })),
            React.createElement("button", { onClick: this.props.addEmptyCardGroup }, "Add"));
    }
}
exports.CardBoardComponent = CardBoardComponent;
//# sourceMappingURL=cardBoardComponent.js.map