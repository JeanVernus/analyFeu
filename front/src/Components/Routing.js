import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactMe from "./ContactMe";
import BureauSSI from "./BureauSSI";
import Formation from "./Formation";
import Home from "./Home";


class Routing extends Component {
    render() {
        return(
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route exact path={"/"} component={Home}/>
                        <Route path={"/contact"} component={ContactMe}/>
                        <Route path={"/bureauSSI"} component={BureauSSI}/>
                        <Route path={"/formation"} component={Formation}/>
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Routing;
