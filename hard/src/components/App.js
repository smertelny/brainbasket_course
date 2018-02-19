import React, { Component } from "react";

import Navbar from './Navbar';
import Products from './Products';
import Sidebar from './Sidebar';


export default class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="wrapper">
                    <Sidebar />
                    <Products />
                </div>
            </React.Fragment>
        )
    }
}
