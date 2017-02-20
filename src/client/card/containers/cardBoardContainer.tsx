import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { CardGroupActions } from "../actions";
import { CardBoardComponent } from "../components/cardBoardComponent";
import { Store } from "../../app/";
import { ICardGroupModel } from "../model";

type OwnProps = {}

type ConnectedState = {
    cardGroups: ICardGroupModel[],
};
type ConnectedDispatch = {
    addEmptyCardGroup: () => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cardGroups: state.cardsRoot.cardGroups.filter(cg => !cg.parentId),
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCardGroup: () => dispatch(CardGroupActions.addCardGroup("")),
});

class CardBoardContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cardGroups, addEmptyCardGroup } = this.props;
        return (cardGroups)
                ? <CardBoardComponent cardGroups={cardGroups} 
                                      addEmptyCardGroup={addEmptyCardGroup}  />
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
)<React.ComponentClass<OwnProps>>(CardBoardContainer);
