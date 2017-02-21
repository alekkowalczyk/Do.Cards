"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const CardComponent_1 = require("../components/CardComponent");
const model_1 = require("../model");
const mapStateToProps = (state, ownProps) => ({
    card: ownProps.card,
    subCards: state.cardsRoot.cards.filter(c => c.id.parentType === model_1.CardParent_Card && c.id.parentId === ownProps.card.id.id),
});
const mapDispatchToProps = (dispatch, ownProps) => ({
    editCardTitle: (newTitle) => dispatch(actions_1.CardActions.cardTitleChanged(ownProps.card.id, newTitle)),
    addSubCard: () => dispatch(actions_1.CardActions.addCard(model_1.CardParent_Card, ownProps.card.id.id, "")),
    archiveCard: () => dispatch(actions_1.CardActions.archiveCard(ownProps.card.id)),
});
class CardContainer extends React.Component {
    render() {
        const { card, subCards, archiveCard, editCardTitle, addSubCard } = this.props;
        return (card)
            ? React.createElement(CardComponent_1.CardComponent, { title: card.title, subCards: subCards, addSubCard: addSubCard, titleChanged: (newTitle) => editCardTitle(newTitle), remove: archiveCard })
            : React.createElement("div", null);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// Important part here is the <React.ComponentClass<OwnProps>>
// it casts in the definition file of react-redux the connected output 
// to the provided react component class.
// Without it, any place which would want to use this component would
// require to pass props which are mapped from the store.
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardContainer);
//# sourceMappingURL=CardContainer.js.map