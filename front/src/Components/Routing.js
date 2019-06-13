import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactMe from "./ContactMe";
import Home from "./Home";


class Routing extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/contact"} component={ContactMe}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routing;
