import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { CardListComponent } from "../components/cardListComponent";
import { Store } from "../../app/";
import { ICardProps, CardModel, CardParentType, CardStatus, CardParent_Card } from "../model";
import { CardActions } from "../actions";
type OwnProps = {
    parentId: string,
    parentType: CardParentType,
    displayEmptyCard: boolean,
}

type ConnectedState = {
    cards: ICardProps[],
};

type ConnectedDispatch = {
    displayEmptyCardAbove: (card: ICardProps) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    let cards = state.cardsRoot.cards
                .filter(c => c.id.parentType === ownProps.parentType && c.id.parentId === ownProps.parentId)
                .sort((a, b) => {
                    if (a.order >= b.order) {
                        return 1;
                    } else if (a.order <= b.order) {
                        return -1;
                    }
                    return 0;
                });
    if (ownProps.displayEmptyCard) {
        const emptyCard = CardModel.GetEmpty({id:  { id: "-1",
                parentType: ownProps.parentType,
                parentId: ownProps.parentId },
            order: -1});
        const cardIndexAboveBelow = cards.findIndex(c => c.ui.displayEmptyCardAbove === true);
        if (cardIndexAboveBelow !== -1) {
            cards = [
                    ...cards.slice(0, cardIndexAboveBelow),
                    emptyCard,
                    ...cards.slice(cardIndexAboveBelow),
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
    displayEmptyCardAbove: (card: ICardProps | null) => {
        if (card) {
            if (card.id.id !== "-1" && card.ui.displayEmptyCardAbove !== true) {
                dispatch(CardActions.displayEmptyCardAboveAction(card.id));
            }
        } else {
            dispatch(CardActions.displayEmptyCardAtBottomAction(ownProps.parentId, ownProps.parentType));
        }
    },
});


class CardListContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cards, parentType } = this.props;
        return <CardListComponent cards={cards}
                                    displayEmptyCardAbove={this.props.displayEmptyCardAbove}
                                    isSubCardsList={parentType === CardParent_Card}/>;
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
