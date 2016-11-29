"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const CardGroupComponent_1 = require("../components/CardGroupComponent");
const mapStateToProps = (state, ownProps) => ({
    cards: state.cards,
});
const mapDispatchToProps = (dispatch) => ({
    addEmptyCard: () => dispatch(actions_1.CardActions.addCard("", "")),
});
class CardGroupContainer extends React.Component {
    render() {
        const { cards, addEmptyCard } = this.props;
        return React.createElement(CardGroupComponent_1.CardGroupComponent, { cards: cards, addEmptyCard: addEmptyCard });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardGroupContainer);
//# sourceMappingURL=cardGroupContainer.js.map