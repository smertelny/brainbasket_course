import React, { Component } from "react";

import Products from './Products';
import { PRODUCTS } from "./constants";


export default class App extends Component {
    render() {
        return (
            <Products data={PRODUCTS} />
        )
    }
}
