import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardActions } from "../actions";
import { CardComponent } from "../components/CardComponent";
import { Store } from "../../app/";
import { ICardModel, CardParent_Card } from "../model";

type OwnProps = {
    card: ICardModel;
}
type ConnectedState = {
    card: ICardModel,
    subCards: ICardModel[],
};
type ConnectedDispatch = {
    editCardTitle: (newTitle: string) => void;
    archiveCard: () => void;
    addSubCard: () => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    card: ownProps.card,
    subCards: state.cardsRoot.cards.filter(c => c.parentType == CardParent_Card && c.parentId == ownProps.card.id),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>, ownProps: OwnProps): ConnectedDispatch => ({
    editCardTitle: (newTitle: string) => dispatch(CardActions.cardTitleChanged(ownProps.card.id, newTitle)),
    addSubCard: () => dispatch(CardActions.addCard(CardParent_Card, ownProps.card.id, "")),
    archiveCard: () => dispatch(CardActions.archiveCard(ownProps.card.id)),
});

class CardContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { card, subCards, archiveCard, editCardTitle, addSubCard } = this.props;
        return (card)
                ? <CardComponent title={card.title}
                                           subCards={subCards}
                                           addSubCard={addSubCard}
                                           titleChanged={(newTitle) => editCardTitle(newTitle)}
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
