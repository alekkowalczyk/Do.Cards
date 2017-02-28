import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { CardListComponent } from "../components/cardListComponent";
import { Store } from "../../app/";
import { ICardModel, CardParentType, CardStatus, CardParent_Card } from "../model";

type OwnProps = {
    parentId: string,
    parentType: CardParentType,
    displayEmptyCard: boolean,
}

type ConnectedState = {
    cards: ICardModel[],
};

type ConnectedDispatch = {
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    let cards = state.cardsRoot.cards.filter(c => c.id.parentType === ownProps.parentType && c.id.parentId === ownProps.parentId);
    if (ownProps.displayEmptyCard) {
        const emptyCard = {
            id: { id: "-1",
                parentType: ownProps.parentType,
                parentId: ownProps.parentId },
            status: "Empty" as CardStatus,
            title: "",
            ui: {},
        };
        const cardIndexAboveBelow = cards.findIndex(c => c.ui.displayEmptyCardAbove === true);
        if (cardIndexAboveBelow !== -1) {
            cards = [
                    ...cards.splice(0, cardIndexAboveBelow),
                    emptyCard,
                    ...cards.splice(cardIndexAboveBelow),
                ];
        } else {
            cards = [ ...cards, emptyCard ];
        }
    }
    return {
        cards: cards,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Store>, ownProps: OwnProps): ConnectedDispatch => ({
});

class CardListContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cards, parentType } = this.props;
        return <CardListComponent cards={cards} isSubCardsList={parentType === CardParent_Card}/>;
    }
}

// Important part here is the <React.ComponentClass<OwnProps>>
// it casts in the definition file of react-redux the connected output 
// to the provided react component class.
// Without it, any place which would want to use this component would
// require to pass props which are mapped from the store.
export default connect(
    mapStateToProps,
    mapDispatchToProps
)<React.ComponentClass<OwnProps>>(CardListContainer);
