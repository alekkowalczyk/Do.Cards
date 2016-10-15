import * as React from "react";
import { IndexRoute, Route } from "react-router";
import { App, BoardPage, AboutPage } from "../containers";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={BoardPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
