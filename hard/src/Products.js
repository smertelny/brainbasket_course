import React, { Component } from "react";

import Product from "./Product"
import { getProducts } from './fakeApi'

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false,
            products: []
        }
    }

    componentDidMount(){
        this.setState({isLoading: true});
        getProducts('/products').then( response => 
            this.setState({products: response, isLoading: false })
        );
    }

    render() {
        if (this.state.isLoading) {
            return <div className="animate"><img className="animation" src="./static/img/reload.svg" alt="Loading..." /></div>
        }
        if (!this.state.isLoading && this.state.products.length === 0) {
            return <h1 style={{textAlign: "center"}}>There is no products here</h1>
        }
        return (
            <div className="products">
                {this.state.products.map( (prod) => <Product key={prod.id} data={prod} />)}
            </div>
        )
    }
}
