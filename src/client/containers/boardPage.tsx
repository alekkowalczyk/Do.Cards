import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import * as cardActions from "../actions/cardActions";
import { CardGroupComponent } from "../components/CardGroupComponent";
import { Store } from "../reducers/";
import { CardGroupState, CardState } from "../state/card";

type OwnProps = {}
type ConnectedState = {
    cardList: CardGroupState
};
type ConnectedDispatch = {
    addEmptyCard: () => void;
    editCardTitle: (card: CardState, newTitle: string) => void;
    archiveCard: (card: CardState) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cardList: state.cardList,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(cardActions.addCard("")),
    editCardTitle: (card: CardState, newTitle: string) => dispatch(cardActions.editCardTitle(card.id, newTitle)),
    archiveCard: (card: CardState) => dispatch(cardActions.archiveCard(card.id)),
});

class BoardPage extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cardList, addEmptyCard, archiveCard, editCardTitle } = this.props;
        return <CardGroupComponent cards={cardList.cards}
                                    editCardTitle={editCardTitle}
                                    addEmptyCard={addEmptyCard}
                                    removeCard={archiveCard} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BoardPage);
