/// <reference path="../../typings_own/index.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { AppContainer } from "react-hot-loader";
import { CardBoardPage } from "./app/containers";
import configureStore from "./app/store/configureStore";
import routes from "./app/store/routes";
import { INITIAL_STATE } from "./card/reducers/rootCardsReducer";
import App from "./app/containers/app";

const initialStore = configureStore({
    cardsRoot: INITIAL_STATE,
});
const rootEl = document.getElementById("root");
ReactDOM.render(
    <AppContainer>
      <Provider store={initialStore}>
        <App>
        </App>
      </Provider>
    </AppContainer>,
    rootEl
);

declare var module: any;
declare var require: any;
declare module "react-hot-loader";


// Hot Module Replacement API
if (module.hot) {
  const refreshCss = (cssName: string) => {
    const baseStyle = window.document.getElementById(`js-${cssName}-css`);
    if(baseStyle) {
        baseStyle.setAttribute('href', `/style/${cssName}.css?v=` + new Date().getTime())
    }
  }
  module.hot.accept("./app/containers/app", () => {
    refreshCss("card");
    refreshCss("main");

    const NextApp = require("./app/containers/app").default;
    ReactDOM.render(
      <div>AAAAAAAAAAAAAAAAAAAA
      {/*<AppContainer>
        <Provider store={initialStore}>
          <NextApp>
          </NextApp>
        </Provider>
      </AppContainer>*/}
      </div>
      ,
      rootEl
    );
  });
}
