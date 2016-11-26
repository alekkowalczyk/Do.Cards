"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const cardActions = require("../actions/cardActions");
const CardGroupComponent_1 = require("../components/CardGroupComponent");
const mapStateToProps = (state, ownProps) => ({
    cardGroup: state.cardGroup,
});
const mapDispatchToProps = (dispatch) => ({
    addEmptyCard: () => dispatch(cardActions.addCard("")),
    editCardTitle: (card, newTitle) => dispatch(cardActions.cardTitleChanged(card.id, newTitle)),
    archiveCard: (card) => dispatch(cardActions.archiveCard(card.id)),
});
class CardGroupContainer extends React.Component {
    render() {
        const { cardGroup, addEmptyCard, archiveCard, editCardTitle } = this.props;
        return React.createElement(CardGroupComponent_1.CardGroupComponent, { cards: cardGroup.cards, editCardTitle: editCardTitle, addEmptyCard: addEmptyCard, removeCard: archiveCard });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardGroupContainer);
//# sourceMappingURL=cardGroupContainer.js.map