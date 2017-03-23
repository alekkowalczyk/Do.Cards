import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardGroupActions, CardModuleActions } from "../actions";

import { CardGroupDraggableComponent } from "../components/cardGroupDraggableComponent";
import { Store } from "../../app/";
import { ICardGroupProps, CardParent_CardGroup } from "../model";
import { IHoveringCardGroup } from "../model/cardModuleUiModel";

type OwnProps = {
    cardGroup: ICardGroupProps;
}
type ConnectedState = {
    hasCards: boolean,
    subCardGroups: ICardGroupProps[],
    cardGroup: ICardGroupProps,
    hoveringCardGroup: IHoveringCardGroup,
    isParentCard: (card: ICardGroupProps) => boolean,
};
type ConnectedDispatch = {
    addEmptyCard: () => void;
    addSubCardGroup: () => void;
    cardGroupTitleChanged: (newTitle: string) => void;
    archiveCardGroup: () => void;
    hoveringAction: (options?: IHoveringCardGroup) => void;
    dropHoveringCardAction: (hovering: IHoveringCardGroup) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    return {
        hasCards: state.cardsRoot.cards.some(c => c.id.parentType === CardParent_CardGroup && c.id.parentId === ownProps.cardGroup.id),
        subCardGroups: state.cardsRoot.cardGroups.filter(cg => cg.parentId === ownProps.cardGroup.id),
        cardGroup: ownProps.cardGroup,
        hoveringCardGroup: state.cardsRoot.moduleUI.hoveringCardGroup,
        isParentCard: (parent: ICardGroupProps) => {
            // child to check if `parent` is parent of that child - card of this container
            let child: ICardGroupProps | null = ownProps.cardGroup;
            // if parent is card group, then we are sure that parent is not a parent card
            while (child != null) {
                if (child.parentId === parent.id) {
                    return true;
                }
                // let's get the parent of that card and check if that parent is a child of the parent we test :)
                child = state.cardsRoot.cardGroups.find(t => child !== null && t.id === child.parentId) || null;
            }
            return false;
        },
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Store>, ownProps: OwnProps): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(CardGroupActions.forceDisplayAddCard(ownProps.cardGroup.id)),
    addSubCardGroup: () => dispatch(CardGroupActions.addCardGroup("", ownProps.cardGroup.id)),
    cardGroupTitleChanged: (newTitle) => dispatch(CardGroupActions.cardGroupTitleChanged(ownProps.cardGroup.id, newTitle)),
    archiveCardGroup: () => dispatch(CardGroupActions.archiveCardGroup(ownProps.cardGroup.id)),
    hoveringAction: (options) => dispatch(CardModuleActions.hoveringCardGroup(options)),
    dropHoveringCardAction: (h) => {
        if (h.hoveringCardGroup && h.hoveringOver && h.hoverType !== "NONE") {
            const movingForward = h.hoveringOver.order > h.hoveringCardGroup.order;
            const newOrder = h.hoverType === "LEFT" ?
                            h.hoveringOver.order - (movingForward ? 1 : 0)
                            : h.hoveringOver.order + (movingForward ? 0 : 1);
            console.log("NOT IMPLEMENTED(2)", h, newOrder);
        }
    },
});

class CardGroupContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { hasCards, cardGroup, addEmptyCard,
            subCardGroups, addSubCardGroup, isParentCard,
            cardGroupTitleChanged, archiveCardGroup } = this.props;
        return <CardGroupDraggableComponent displayEmptyCard=
                                        {cardGroup.id !== "-1" && (subCardGroups.length === 0 || hasCards || cardGroup.ui.forceDisplayAddCard === true)}
                                    cardGroup={cardGroup}
                                    isParentCardGroup={isParentCard}
                                    hoveringDropAction={this.props.dropHoveringCardAction}
                                    hoveringCardGroup={this.props.hoveringCardGroup}
                                    hoveringAction={this.props.hoveringAction}
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
