import React, { Component } from "react";
import {Switch, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Products from "./Products";
import Sidebar from "./Sidebar";
import ProductDetails from "./ProductDetails";
import { getLocalData, setLocalData, clearLocalData } from "../localStorage";

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            cart: []
        };
        this.cartAddHandler = this.cartAddHandler.bind(this);
        this.cartClearHandler = this.cartClearHandler.bind(this);
    }

    componentDidMount() {
        let data = getLocalData();
        this.setState({ cart: data});
    }

    componentDidUpdate() {
        setLocalData(this.state.cart);
    }

    cartClearHandler() {
        clearLocalData();
        this.setState({cart: []});
    }

    cartAddHandler(product) {
        this.setState({cart: [...this.state.cart, product]});
    }

    render() {
        return (
            <React.Fragment>
                <Navbar cart={this.state.cart} cartClearHandler={this.cartClearHandler} />
                <div className="wrapper">
                    <Sidebar cart={this.state.cart}/>
                    <Switch>
                        <Route exact path="/book/:id" component={ProductDetails}/>
                        <Route exact path="/" render={(props) => <Products cart={this.state.cart} cartAddHandler={this.cartAddHandler} {...props} />} />
                        <Route path="/:filter" render={(props) => <Products cart={this.state.cart} cartAddHandler={this.cartAddHandler} {...props} />} />
                    </Switch>
                </div>
            </React.Fragment>
        );
    }
}
