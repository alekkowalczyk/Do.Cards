"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const CardGroupComponent_1 = require("../components/CardGroupComponent");
const model_1 = require("../model");
const mapStateToProps = (state, ownProps) => {
    const cards = state.cardsRoot.cards.filter(c => c.id.parentId === ownProps.cardGroup.id);
    if (ownProps.cardGroup.id !== "-1") {
        cards.push({
            id: { id: "-1",
                parentType: model_1.CardParent_CardGroup,
                parentId: ownProps.cardGroup.id },
            status: "Empty",
            title: "",
        });
    }
    return {
        cards: cards,
        subCardGroups: state.cardsRoot.cardGroups.filter(cg => cg.parentId === ownProps.cardGroup.id),
        cardGroup: ownProps.cardGroup,
    };
};
const mapDispatchToProps = (dispatch, ownProps) => ({
    addEmptyCard: () => dispatch(actions_1.CardActions.addCard(model_1.CardParent_CardGroup, ownProps.cardGroup.id, "")),
    addSubCardGroup: () => dispatch(actions_1.CardGroupActions.addCardGroup("", ownProps.cardGroup.id)),
    cardGroupTitleChanged: (newTitle) => dispatch(actions_1.CardGroupActions.cardGroupTitleChanged(ownProps.cardGroup.id, newTitle)),
    archiveCardGroup: () => dispatch(actions_1.CardGroupActions.archiveCardGroup(ownProps.cardGroup.id)),
});
class CardGroupContainer extends React.Component {
    render() {
        const { cards, cardGroup, addEmptyCard, subCardGroups, addSubCardGroup, cardGroupTitleChanged, archiveCardGroup } = this.props;
        return React.createElement(CardGroupComponent_1.CardGroupComponent, { cards: cards, subCardGroups: subCardGroups, title: cardGroup.title, titleChanged: cardGroupTitleChanged, remove: archiveCardGroup, addEmptyCard: addEmptyCard, addSubCardGroup: addSubCardGroup });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// Important part here is the <React.ComponentClass<OwnProps>>
// it casts in the definition file of react-redux the connected output 
// to the provided react component class.
// Without it, any place which would want to use this component would
// require to pass props which are mapped from the store.
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardGroupContainer);
//# sourceMappingURL=CardGroupContainer.js.map