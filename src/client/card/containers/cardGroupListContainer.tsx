import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";

import { CardGroupListComponent } from "../components/cardGroupListComponent";
import { CardGroupListDropableComponent } from "../components/cardGroupListDropableComponent";
import { Store } from "../../app/";
import { ICardGroupProps, CardGroupModel, IHoveringCardGroup } from "../model";
import { CardActions, CardModuleActions } from "../actions";

type OwnProps = {
    parentId?: string,
}

type ConnectedState = {
    cardGroups: CardGroupModel[],
    hoveringCardGroup: IHoveringCardGroup,
};

type ConnectedDispatch = {
    hoveringAction: (options?: IHoveringCardGroup) => void;
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => {
    const cardGroups = state.cardsRoot.cardGroups.filter(cg => cg.parentId == ownProps.parentId)
                .slice()
                .sort((a, b) => {
                    if (a.order >= b.order) {
                        return 1;
                    } else if (a.order <= b.order) {
                        return -1;
                    }
                    return 0;
                });
    if(ownProps.parentId === undefined){
        cardGroups.push( CardGroupModel.GetEmpty({
                    id: "-1",
                    order: state.cardsRoot.cardGroups.filter(cg => !cg.parentId).length + 1,
            }));
    }
    return {
        cardGroups,
        hoveringCardGroup: state.cardsRoot.moduleUI.hoveringCardGroup,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<Store>, ownProps: OwnProps): ConnectedDispatch => ({
    hoveringAction: (options) => dispatch(CardModuleActions.hoveringCardGroup(options)),
});


class CardListContainer extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        const { cardGroups, parentId } = this.props;
        const subProps = {
            cardGroups: cardGroups,
            hoveringAction: this.props.hoveringAction,
            hoveringCardGroupOptions: this.props.hoveringCardGroup,
            isSubCardsList: parentId !== null && parentId !== undefined,
        };
        if (subProps.isSubCardsList) {
            return <CardGroupListComponent {...subProps} />;
        } else {
            return <CardGroupListDropableComponent {...subProps} />;
        }
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
)<React.ComponentClass<OwnProps>>(CardListContainer);
