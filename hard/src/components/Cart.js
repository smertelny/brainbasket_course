import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart, removeFromCart } from "../actions/actions";

const CartComponent = (props) => {
    if (!props.cart || Object.keys(props.cart).length === 0) {
        return <div className={!props.visible ? "hidden" : null}>В кошику нічого немає :-(</div>;   
    } else {
        return(
            <React.Fragment>
                <h2>Ваш кошик:</h2>
                {Object.keys(props.cart).map((id, index) => (
                    <div key={index} className="cart__product">
                        <hr />
                        <img src={props.cart[id].image} />
                        <h3>{props.cart[id].name}</h3>
                        <p>Ціна: {props.cart[id].price}</p>
                        <p>К-сть: {props.cart[id].quantity}</p>
                        <p>Всього за товар: {props.cart[id].price * props.cart[id].quantity}</p>
                        <button onClick={() => props.cartRemoveHandler(props.cart[id])} style={{color: "red"}}>&#10006;</button>
                    </div>
                ))}
                <hr />
                <h2>Всього: {Object.keys(props.cart).map(id => props.cart[id].price * props.cart[id].quantity ).reduce((prev, curr) => prev + curr).toFixed(2)} UAH</h2>
                <button className="cart__clear" onClick={() => props.cartClearHandler()}>Видалити з кошика</button>
                <button className="cart__buy" onClick={() => alert("Not implemented yet")}>Замовити</button>
            </React.Fragment>
        );
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart.items,
        visible: state.cart.cartVisible
    };
};

const mapDispatchToProps = dispatch => {
    return {
        cartClearHandler: () => dispatch(clearCart()),
        cartRemoveHandler: product => dispatch(removeFromCart(product)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);
