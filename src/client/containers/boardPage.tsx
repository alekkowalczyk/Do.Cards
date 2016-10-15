import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as cardActions from "../actions/cardActions";
import { CardGroupComponent } from "../components/CardGroupComponent";
import { Store } from "../reducers/";
import { CardListModel, CardModel } from "../model/card";

type OwnProps = {}
type ConnectedState = {
    cardList: CardListModel
};
type ConnectedDispatch = {
    addEmptyCard: () => void;
    archiveCard: (card: CardModel) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cardList: state.cardList,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(cardActions.addCard("")),
    archiveCard: (card: CardModel) => dispatch(cardActions.archiveCard(card.id)),
});

class BoardPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cardList, addEmptyCard, archiveCard } = this.props;
        return <CardGroupComponent cards={cardList.cards}
                                    addEmptyCard={addEmptyCard}
                                    removeCard={archiveCard} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardPage);
