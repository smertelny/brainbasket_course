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
        this.setState({ cart: data });
    }

    componentDidUpdate() {
        setLocalData(this.state.cart);
    }

    cartClearHandler() {
        clearLocalData();
        this.setState({cart: []});
    }

    cartAddHandler(product) {
        let temp;
        let found = false;
        
        if (this.state.cart.length === 0) {
            found = true;
            temp = [{...product, quantity: 1}, ];
        } else {
            temp = this.state.cart.map( prod => {
                if(prod.id === product.id) {
                    found = true;
                    return {...prod, quantity: prod.quantity + 1 };
                } else {
                    return prod;
                }
            });
        }
        found ? this.setState({cart: temp}) : this.setState({cart: [...temp, {...product, quantity: 1}]});
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
