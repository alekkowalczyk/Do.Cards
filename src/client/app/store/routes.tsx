import * as React from "react";
import { IndexRoute, Route } from "react-router";
import { App, AboutPage } from "../containers";
import { CardBoardPage } from "../containers";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={CardBoardPage}/>
        <Route path="about" component={AboutPage}/>
    </Route>
);

// export default (
//     <CardBoardPage />
// );