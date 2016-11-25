import * as React from "react";
import { IndexRoute, Route } from "react-router";
import { App, AboutPage } from "../containers";
import { CardGroupContainer } from "../../card/containers";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CardGroupContainer}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);
