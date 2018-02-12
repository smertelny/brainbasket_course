import React, { Component } from "react";

import { REVIEWS } from './constants';
import Reviews from './Reviews';
import { getProducts, getReviews } from "./fakeApi"

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            data:{
                details:[]
            },
            reviews: [],
            showReviews: false
        }
        this.handleBuyClick = this.handleBuyClick.bind(this);
        this.handleReviewsClick = this.handleReviewsClick.bind(this);
    }

    handleReviewsClick(e) {
        e.preventDefault();
        this.setState({loadingReviews: true})
        if (this.state.showReviews) {
            this.setState({reviews: [], showReviews: false, loadingReviews: false});

        } else {
            getReviews('/reviews/1').then( response => 
                this.setState({reviews: response, showReviews: true, loadingReviews: false})
            );
        }
    }

    handleBuyClick() {
        alert(
        `Congradulations! You bought number of product!\nQuantity: ${this.select.value}\nP.S. Hello from React =)`
        );
    }

    componentDidMount() {
        this.setState({data: this.props.data})
    }

    render() {
        let { data, reviews } = this.state;
        
        return (
            <div className="product">
                <h1 className="product__name">{ data.name }</h1>
                <div className="product__block">
                    <div className="product__image_block">
                        <img src={ data.image } alt={ data.name + " image" } />
                    </div>
                    <div className="product__desc">
                        <h2>Description:</h2>
                        <p>{ data.description }</p>
                        <br />
                        <b>Product Details:</b>
                        <ul className="product__details">
                            { data.details.map((item, index) => <li key={ index }>{ item }</li>) }
                        </ul>
                        <br />
                        <p><b>Price:</b>{ data.price } { data.currency }</p>
                        <label htmlFor="product__quantity"><b>Quantity: </b></label>
                        <select ref={ node => this.select = node } id="product__quantity" name="quantity">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>...</option>
                        </select>
                        <button onClick={ this.handleBuyClick } id="product__buy" className="product__buy">Buy it now!</button>
                        <div className="product__reviews-btn">
                            <a onClick={ this.handleReviewsClick } href="#">Show Reviews</a>
                            { this.state.loadingReviews ? <img className="animation" style={{ marginLeft: "10px",width: "25px"}} src="./dist/img/reload.svg" alt="Loading..." /> : null }
                        </div>
                    </div>
                   
                </div>
                { reviews ? <Reviews data={reviews} /> : null }
            </div>
        )
    }
}
