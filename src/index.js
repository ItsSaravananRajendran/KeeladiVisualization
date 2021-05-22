import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from "react-router-dom";


import Home from "./Home";
import Pottery from "./Pottery";
import SemiPrecious from "./SemiPrecious";
import Ornaments from "./Ornaments";
import FaunalRemains from "./FaunalRemains";
import TamilBrahmin from "./TamilBrahmin";
import Games from "./Games";
import Terracotta from "./Teracotta";
import StructuralRemains from "./StructuralRemains";


function ScrollToTop({ history }) {
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        }
    }, []);

    return (null);
}

const Scroll = withRouter(ScrollToTop);

ReactDOM.render(<Router>
    <Scroll />
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/pottery">
            <Pottery />
        </Route>
        <Route path="/semi-precious">
            <SemiPrecious />
        </Route>
        <Route path="/ornaments">
            <Ornaments />
        </Route>
        <Route path="/faunal">
            <FaunalRemains />
        </Route>
        <Route path="/tamil-script">
            <TamilBrahmin />
        </Route>
        <Route path="/games">
            <Games />
        </Route>
        <Route path="/terracotta">
            <Terracotta />
        </Route>
        <Route path="/structural-remains">
            <StructuralRemains />
        </Route>

    </Switch>
</Router>, document.getElementById("root"));