import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as cardActions from "../actions/cardActions";
import { CardGroupComponent } from "../components/CardGroupComponent";
import { Store } from "../../app/";
import { ICardGroupModel, ICardModel } from "../model";

type OwnProps = {}
type ConnectedState = {
    cardGroup: ICardGroupModel
};
type ConnectedDispatch = {
    addEmptyCard: () => void;
    editCardTitle: (card: ICardModel, newTitle: string) => void;
    archiveCard: (card: ICardModel) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cardGroup: state.cardGroup,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(cardActions.addCard("")),
    editCardTitle: (card: ICardModel, newTitle: string) => dispatch(cardActions.cardTitleChanged(card.id, newTitle)),
    archiveCard: (card: ICardModel) => dispatch(cardActions.archiveCard(card.id)),
});

class CardGroupContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cardGroup, addEmptyCard, archiveCard, editCardTitle } = this.props;
        return <CardGroupComponent cards={cardGroup.cards}
                                    editCardTitle={editCardTitle}
                                    addEmptyCard={addEmptyCard}
                                    removeCard={archiveCard} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardGroupContainer);
