import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from "../actions/actions";


const Product = (props) => {  
    if (!props.data) {
        return <h1 style={{textAlign: "center"}}>There is no such product</h1>;
    }

    let { data } = props;

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
            <button onClick={() => props.cartAddHandler(data)} >Придбати</button>
        </div>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        cartAddHandler: data => dispatch(addToCart(data))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Product);
