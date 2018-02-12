import React, { Component } from "react";

import Product from "./Product"
import { getProducts } from './fakeApi'

export default class Products extends Component {
    constructor() {
        super();
        this.state = {
            products: []
        }
    }

    componentDidMount(){
        getProducts('/products').then( response => 
            this.setState({products: response })
        );
    }

    render() {
        if (this.state.products.length === 0){
            return <div className="animate"><img className="animation" src="./dist/img/reload.svg" alt="Loading..." /></div>
        }
        return (
            this.state.products.map( (prod, index) => <Product key={index} data={prod} />)
        )
    }
}
