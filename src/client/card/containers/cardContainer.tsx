import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardActions, CardModuleActions } from "../actions";
import CardDraggableComponent from "../components/cardDraggableComponent";
import { Store } from "../../app/";
import { ICardProps, IHoveringCard, CardParent_CardGroup, CardParent_Card } from "../model";

type OwnProps = {
    card: ICardProps;
}
type ConnectedState = {
    hoveringCard: IHoveringCard;
    isParentCard: (card: ICardProps) => boolean;
};
type ConnectedDispatch = {
    editCardTitle: (newTitle: string) => void;
    archiveCard: () => void;
    addSubCard: () => void;
    hoveringAction: (options?: IHoveringCard) => void;
    dropHoveringCardAction: (hovering: IHoveringCard) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    return {
        hoveringCard: state.cardsRoot.moduleUI.hoveringCard,
        isParentCard: (parent: ICardProps) => {
            // child to check if `parent` is parent of that child - card of this container
            let child: ICardProps | null = ownProps.card;
            // if parent is card group, then we are sure that parent is not a parent card
            while (child != null && child.id.parentType === CardParent_Card) {
                if (child.id.parentId === parent.id.id) {
                    return true;
                }
                // let's get the parent of that card and check if that parent is a child of the parent we test :)
                child = state.cardsRoot.cards.find(t => child !== null && t.id.id === child.id.parentId) || null;
            }
            return false;
        }
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Store>, ownProps: OwnProps, s: any): ConnectedDispatch => ({
    editCardTitle: (newTitle: string) => dispatch(CardActions.cardTitleChanged(ownProps.card.id, newTitle)),
    addSubCard: () => dispatch(CardActions.displayEmptySubCardAction(ownProps.card.id)),
    archiveCard: () => dispatch(CardActions.archiveCard(ownProps.card.id)),
    hoveringAction: (options) => dispatch(CardModuleActions.hoveringCard(options)),
    dropHoveringCardAction: (h) => {
        if (h.hoveringCard && h.hoveringOver && h.hoverType !== "NONE") {
            const movingForward = h.hoveringOver.order > h.hoveringCard.order;
            const newOrder = h.hoverType === "TOP" ?
                            h.hoveringOver.order - (movingForward ? 1 : 0)
                            : h.hoveringOver.order + (movingForward ? 0 : 1);
            console.log(h, newOrder);
            dispatch(CardActions.moveCardAction(h.hoveringCard.id,
                                    h.hoveringOver.id.parentId,
                                    h.hoveringOver.id.parentType,
                                    newOrder));
        }
    },
});

class CardContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { card, archiveCard, editCardTitle, addSubCard } = this.props;
        return (card)
                ? <CardDraggableComponent card={card}
                                    isParentCard={this.props.isParentCard}
                                    hoveringDropAction={this.props.dropHoveringCardAction}
                                    hoveringCard={this.props.hoveringCard}
                                    hoveringAction={this.props.hoveringAction}
                                    displayEmptySubCard={card.ui.displayAddSubCard === true}
                                    displayEmptySubCardAction={addSubCard}
                                    titleChanged={(newTitle: string) => editCardTitle(newTitle)}
                                    remove={archiveCard}  />
                : <div/>;
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
)<React.ComponentClass<OwnProps>>(CardContainer);
