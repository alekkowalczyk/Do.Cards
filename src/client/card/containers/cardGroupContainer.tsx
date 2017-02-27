import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardActions, CardGroupActions } from "../actions";

import { CardGroupComponent } from "../components/CardGroupComponent";
import { Store } from "../../app/";
import { ICardModel, ICardGroupModel, CardParent_CardGroup } from "../model";

type OwnProps = {
    cardGroup: ICardGroupModel;
}
type ConnectedState = {
    hasCards: boolean,
    subCardGroups: ICardGroupModel[],
    cardGroup: ICardGroupModel,
};
type ConnectedDispatch = {
    addEmptyCard: () => void;
    addSubCardGroup: () => void;
    cardGroupTitleChanged: (newTitle: string) => void;
    archiveCardGroup: () => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    return {
        hasCards: state.cardsRoot.cards.some(c => c.id.parentType === CardParent_CardGroup && c.id.parentId === ownProps.cardGroup.id),
        subCardGroups: state.cardsRoot.cardGroups.filter(cg => cg.parentId === ownProps.cardGroup.id),
        cardGroup: ownProps.cardGroup,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Store>, ownProps: OwnProps): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(CardGroupActions.forceDisplayAddCard(ownProps.cardGroup.id)),
    addSubCardGroup: () => dispatch(CardGroupActions.addCardGroup("", ownProps.cardGroup.id)),
    cardGroupTitleChanged: (newTitle) => dispatch(CardGroupActions.cardGroupTitleChanged(ownProps.cardGroup.id, newTitle)),
    archiveCardGroup: () => dispatch(CardGroupActions.archiveCardGroup(ownProps.cardGroup.id)),
});

class CardGroupContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { hasCards, cardGroup, addEmptyCard,
            subCardGroups, addSubCardGroup,
            cardGroupTitleChanged, archiveCardGroup } = this.props;
        return <CardGroupComponent displayEmptyCard=
                                        {cardGroup.id !== "-1" && (subCardGroups.length === 0 || hasCards || cardGroup.ui.forceDisplayAddCard === true)}
                                    cardGroup={cardGroup}
                                    subCardGroups={subCardGroups}
                                    titleChanged={cardGroupTitleChanged}
                                    remove={archiveCardGroup}
                                    addEmptyCard={addEmptyCard}
                                    addSubCardGroup={addSubCardGroup}
                                    />;
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
)<React.ComponentClass<OwnProps>>(CardGroupContainer);
