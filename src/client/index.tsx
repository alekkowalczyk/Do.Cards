import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router, browserHistory } from "react-router";
import { syncHistoryWithStore } from "react-router-redux";
import configureStore from "./app/store/configureStore";
import routes from "./app/store/routes";

const initialStore = configureStore({
    cardsRoot: {
        cards: [],
        cardGroups: [],
    },
});
const history = syncHistoryWithStore(browserHistory, initialStore);

ReactDOM.render(
    <div>
        <Provider store={initialStore}>
            <Router history={history}>
                {routes}
            </Router>
        </Provider>
    </div>,
    document.getElementById("root")
);
