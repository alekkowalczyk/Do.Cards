import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Store } from "../rootReducer";

type OwnProps = {}
type ConnectedState = {
};
type ConnectedDispatch = {
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
});

class App extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        return <div>
            <div className="app-bar">
                <div id="logo">a7.cards</div>
            </div>
            <div>{this.props.children}</div>
        </div>;
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
