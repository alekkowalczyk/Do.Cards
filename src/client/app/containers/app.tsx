import * as React from "react";
import { Dispatch } from "redux";
import { connect } from "react-redux";
import { Store } from "../rootReducer";
import CardGroupPage from "./cardBoardPage";

type OwnProps = {}
type ConnectedState = {
};
type ConnectedDispatch = {
}

const mapStateToProps = (state: Store, ownProps: OwnProps): ConnectedState => ({
});

const mapDispatchToProps = (dispatch: Dispatch<Store>): ConnectedDispatch => ({
});

// to monitor css file changes by hot reloader
declare var require: any;
const card_css = require("file-loader!../../../../public/style/card.css");
const card_group_css = require("file-loader!../../../../public/style/card-group.css");
const main_css = require("file-loader!../../../../public/style/main.css");
// end of css monitoring declarations

class App extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, void> {
    public render() {
        return <div>
            <div className="app-bar">
                <div id="logo">do.cards</div>
            </div>
            <CardGroupPage />
        </div>;
    }
}

//export default App;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
