import React from  "react";
import ReactDOM from "react-dom";
import {HashRouter, Route} from 'react-router-dom';

import Dashboard from "./components/web/Dashboard";

ReactDOM.render(
    <HashRouter>
        <Route exact path="/" component={Dashboard}/>
    </HashRouter>,
    document.getElementById("root"));