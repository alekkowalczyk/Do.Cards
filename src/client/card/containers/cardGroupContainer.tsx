import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardActions } from "../actions";
import { CardGroupComponent } from "../components/CardGroupComponent";
import { Store } from "../../app/";
import { ICardModel } from "../model";

type OwnProps = {}
type ConnectedState = {
    cards: ICardModel[]
};
type ConnectedDispatch = {
    addEmptyCard: () => void;
    editCardTitle: (card: ICardModel, newTitle: string) => void;
    archiveCard: (card: ICardModel) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cards: state.cards,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(CardActions.addCard("", "")),
    editCardTitle: (card: ICardModel, newTitle: string) => dispatch(CardActions.cardTitleChanged(card.id, newTitle)),
    archiveCard: (card: ICardModel) => dispatch(CardActions.archiveCard(card.id)),
});

class CardGroupContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cards, addEmptyCard, archiveCard, editCardTitle } = this.props;
        return <CardGroupComponent cards={cards}
                                    editCardTitle={editCardTitle}
                                    addEmptyCard={addEmptyCard}
                                    removeCard={archiveCard} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardGroupContainer);
