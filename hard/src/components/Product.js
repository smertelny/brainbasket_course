import React, { Component } from "react";
import { Link, Route } from "react-router-dom";


export default class Product extends Component {
    constructor() {
        super();
        this.state = {
            reviews: null,
            showReviews: false
        };
    }

    render() {
        if (!this.props.data) {
            return <h1 style={{textAlign: "center"}}>There is no such product</h1>;
        }

        let { data } = this.props;

        return (
            <div className="product-card">
                <img src={data.image} alt={data.name + " picture"} />
                <Link to={`book/${data.id}`}><h1>{data.name}</h1></Link>
                <hr />
                <ul className="product-card__details">
                    <li><strong>Автор:</strong> {data.author}</li>
                    <li><strong>Ціна:</strong> {data.price} {data.currency}</li>
                    <li><strong>Жанр:</strong> {data.genre.length > 0 ? data.genre.join(", ") : "---"}</li>
                </ul>
                <button onClick={this.props.cartAddHandler.bind(this, data)} >Придбати</button>
            </div>
        );
    }
}