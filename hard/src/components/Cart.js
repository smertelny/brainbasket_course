import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart, removeFromCart, addToCart } from "../actions/actions";

const CartComponent = (props) => {
    if (!props.cart || Object.keys(props.cart).length === 0) {
        return <React.Fragment>
                    <span className="cart__header">Ваш кошик:</span>
                    <div>В кошику нічого немає :-(</div>
                    <span className="cart__total">Всього: {Object.keys(props.cart).map(id => props.cart[id].price * props.cart[id].quantity ).reduce((prev, curr) => prev + curr, 0).toFixed(2)} UAH</span>
                    <button disabled className="cart__clear" onClick={() => props.cartClearHandler()}>Видалити з кошика</button>
                    <button disabled className="cart__buy" onClick={() => alert("Not implemented yet")}>Замовити</button>
                </React.Fragment>;
    } else {
        return(
            <React.Fragment>
                <span className="cart__header">Ваш кошик:</span>
                {Object.keys(props.cart).map((id, index) => (
                    <div key={index} className="cart__product">
                        <hr />
                        <img src={props.cart[id].image} />
                        <h3>{props.cart[id].name}</h3>
                        <p>Ціна: {props.cart[id].price}</p>
                        <p>К-сть: 
                            <button onClick={() => props.cartAddHandler(props.cart[id])}>+</button>
                            <span className="cart__quantity">
                                {props.cart[id].quantity}
                            </span>
                            <button onClick={() => props.cartRemoveHandler(props.cart[id])}>&#8211;</button>
                        </p>
                        <p>Всього за товар: {props.cart[id].price * props.cart[id].quantity}</p>
                        {/* <button onClick={() => props.cartRemoveHandler(props.cart[id])} style={{color: "red"}}>&#10006;</button> */}
                    </div>
                ))}
                <hr />
                <span className="cart__total">Всього: {Object.keys(props.cart).map(id => props.cart[id].price * props.cart[id].quantity ).reduce((prev, curr) => prev + curr).toFixed(2)} UAH</span>
                <button className="cart__clear" onClick={() => props.cartClearHandler()}>Видалити з кошика</button>
                <button className="cart__buy" onClick={() => alert("Not implemented yet")}>Замовити</button>
            </React.Fragment>
        );
    }
};

const mapStateToProps = (state, ownProps) => {
    return {
        cart: state.cart.items,
        visible: state.cart.cartVisible,
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        cartClearHandler: () => dispatch(clearCart()),
        cartRemoveHandler: product => dispatch(removeFromCart(product)),
        cartAddHandler: product => dispatch(addToCart(product)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);
