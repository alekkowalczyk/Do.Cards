"use strict";
const React = require("react");
const react_redux_1 = require("react-redux");
const actions_1 = require("../actions");
const cardBoardComponent_1 = require("../components/cardBoardComponent");
const mapStateToProps = (state, ownProps) => ({
    cardGroups: state.cardsRoot.cardGroups,
});
const mapDispatchToProps = (dispatch) => ({
    addEmptyCardGroup: () => dispatch(actions_1.CardGroupActions.addCardGroup("")),
});
class CardBoardContainer extends React.Component {
    render() {
        const { cardGroups, addEmptyCardGroup } = this.props;
        return (cardGroups)
            ? React.createElement(cardBoardComponent_1.CardBoardComponent, { cardGroups: cardGroups, addEmptyCardGroup: addEmptyCardGroup })
            : React.createElement("div", null);
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
// Important part here is the <React.ComponentClass<OwnProps>>
// it casts in the definition file of react-redux the connected output 
// to the provided react component class.
// Without it, any place which would want to use this component would
// require to pass props which are mapped from the store.
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(CardBoardContainer);
//# sourceMappingURL=CardBoardContainer.js.map