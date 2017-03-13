import * as React from "react";
import { Dispatch, compose } from "redux";
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { connect } from "react-redux";
import { CardGroupActions } from "../actions";
import { CardBoardComponent } from "../components/cardBoardComponent";
import { Store } from "../../app/";
import { CardGroupModel } from "../model";
import CardDragLayer from "../components/cardDragLayerComponent";

type OwnProps = {}

type ConnectedState = {
    cardGroups: CardGroupModel[],
};
type ConnectedDispatch = {
    addEmptyCardGroup: () => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
    cardGroups: [
      ...state.cardsRoot.cardGroups.filter(cg => !cg.parentId),
      CardGroupModel.GetEmpty({
            id: "-1",
            order: state.cardsRoot.cardGroups.filter(cg => !cg.parentId).length,
      }),
    ],
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
    addEmptyCardGroup: () => dispatch(CardGroupActions.addCardGroup("")),
});

class CardBoardContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cardGroups, addEmptyCardGroup } = this.props;
        return <div>
                    {
                        (cardGroups)
                        ? <CardBoardComponent cardGroups={cardGroups} 
                                            addEmptyCardGroup={addEmptyCardGroup}  />
                        : <div/>
                    }
                    <CardDragLayer />
                </div>;
    }
}

// Important part here is the <React.ComponentClass<OwnProps>>
// it casts in the definition file of react-redux the connected output 
// to the provided react component class.
// Without it, any place which would want to use this component would
// require to pass props which are mapped from the store.
export default (compose as any)(
    DragDropContext(HTML5Backend),
    connect(
        mapStateToProps,
        mapDispatchToProps
    )
)(CardBoardContainer);
// Above is simplified to use compose to use DnD, was:
// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )<React.ComponentClass<OwnProps>>(CardContainer);
