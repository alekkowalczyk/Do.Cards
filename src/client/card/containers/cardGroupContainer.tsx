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
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cards: state.cards,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCard: () => dispatch(CardActions.addCard("", "")),
});

class CardGroupContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cards, addEmptyCard } = this.props;
        return <CardGroupComponent cards={cards}
                                    addEmptyCard={addEmptyCard} />;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CardGroupContainer);
