import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardActions } from "../actions";
import { CardComponent } from "../components/CardComponent";
import { Store } from "../../app/";
import { ICardModel } from "../model";

type OwnProps = {
    card: ICardModel;
}
type ConnectedState = {
    card: ICardModel
};
type ConnectedDispatch = {
    editCardTitle: (card: ICardModel, newTitle: string) => void;
    archiveCard: (card: ICardModel) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    card: ownProps.card,
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    editCardTitle: (card: ICardModel, newTitle: string) => dispatch(CardActions.cardTitleChanged(card.id, newTitle)),
    archiveCard: (card: ICardModel) => dispatch(CardActions.archiveCard(card.id)),
});

class CardContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { card, archiveCard, editCardTitle } = this.props;
        return (card)
                ? <CardComponent title={card.title}
                                           titleChanged={(newTitle) => editCardTitle(card, newTitle)}
                                           remove={() => archiveCard(card)}  />
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
