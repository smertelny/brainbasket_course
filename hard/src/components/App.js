import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Products from "./Products";
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";

export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="wrapper">
                    <Sidebar />
                    <Switch>
                        <Route exact path="/" component={Products} />
                        <Route exact path="/:filter" component={Products} />
                        <Route exact path="/book/:id(\d+)" component={ProductDetails}/>
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
