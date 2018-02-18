import React, { Component } from "react";

import Products from './Products';
import Sidebar from './Sidebar';
import { PRODUCTS } from "./constants";


export default class App extends Component {
    render() {
        return (
            <div className="wrapper">
                <Sidebar />
                <Products data={PRODUCTS} />
            </div>
        )
    }
}
