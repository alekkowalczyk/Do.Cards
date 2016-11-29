"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const CardComponent_1 = require("../components/CardComponent");
const mapStateToProps = (state, ownProps) => ({
    card: state.cards.find(c => c.id === ownProps.cardId),
});
const mapDispatchToProps = (dispatch) => ({
    editCardTitle: (card, newTitle) => dispatch(actions_1.CardActions.cardTitleChanged(card.id, newTitle)),
    archiveCard: (card) => dispatch(actions_1.CardActions.archiveCard(card.id)),
});
class CardContainer extends React.Component {
    render() {
        const { card, archiveCard, editCardTitle } = this.props;
        return (card)
            ? React.createElement(CardComponent_1.CardComponent, { title: card.title, titleChanged: (newTitle) => editCardTitle(card, newTitle), remove: () => archiveCard(card) })
            : React.createElement("div", null);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardContainer);
//# sourceMappingURL=CardContainer.js.map