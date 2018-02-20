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
                <Link to={`book/${data.id}`}>
                    <img src={data.image} alt={data.name + " picture"} />
                    <h1>{data.name}</h1>
                </Link>
                <hr />
                {/* <ul className="product-card__details">
                    <li><strong>Автор:</strong> {data.author}</li>
                    <li><strong>Ціна:</strong> {data.price} {data.currency}</li>
                    <li><strong>Жанр:</strong> {data.genre.length > 0 ? data.genre.join(", ") : "---"}</li>
                </ul> */}
                <table style={{textAlign: "left"}}>
                    <tbody>
                        <tr>
                            <td><strong>Автор:</strong></td>
                            <td>{data.author}</td>
                        </tr>
                        <tr>
                            <td><strong>Ціна:</strong></td>
                            <td>{data.price} {data.currency}</td>
                        </tr>
                        <tr>
                            <td><strong>Жанр:</strong></td>
                            <td>{data.genre.length > 0 ? data.genre.join(", ") : "---"}</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={this.props.cartAddHandler.bind(this, data)} >Придбати</button>
            </div>
        );
    }
}
