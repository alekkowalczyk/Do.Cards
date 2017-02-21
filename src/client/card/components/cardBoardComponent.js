"use strict";
const React = require("react");
const CardGroupContainer_1 = require("../containers/CardGroupContainer");
class CardBoardComponent extends React.Component {
    render() {
        return React.createElement("div", { className: "card-board" },
            this.props.cardGroups.map((cg, idx) => cg &&
                React.createElement("div", { key: idx, style: { float: "left" } },
                    React.createElement("span", { style: { color: "blue" } },
                        idx,
                        "/",
                        cg.id),
                    React.createElement(CardGroupContainer_1.default, { cardGroup: cg }))),
            React.createElement("div", { style: { clear: "both" } }));
    }
}
exports.CardBoardComponent = CardBoardComponent;
//# sourceMappingURL=cardBoardComponent.js.map