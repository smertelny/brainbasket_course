import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart, removeFromCart } from "../actions/actions";

const CartComponent = (props) => {
    if (!props.cart || props.cart.length === 0) {
        return <div className="dropdown cart-dropdown">В кошику нічого немає :-(</div>;   
    } else {
        return(
            <div className="dropdown cart-dropdown">
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                        <tr style={{borderBottom: "2px solid black"}}>
                            <td>Товар</td>
                            <td>К-сть</td>
                            <td>Ціна</td>
                            <td></td>                        
                        </tr>
                        {props.cart.map((product, index) => (
                            <tr key={index}>
                                <td style={{textAlign: "left"}}><Link to={`/book/${product.id}`} replace>{product.name}</Link></td>
                                <td>{product.quantity}</td>
                                <td>{product.price} {product.currency}</td>
                                <td style={{textAlign: "center"}}><button onClick={() => props.cartRemoveHandler(product)} style={{color: "red"}}>&#10006;</button></td>
                            </tr>)
                        )}
                        <tr style={{borderTop: "2px solid black"}}>
                            <td colSpan={3}>Всього</td>
                            <td>{props.cart.map(product => product.price * product.quantity ).reduce((prev, curr) => prev + curr).toFixed(2)} UAH</td>
                        </tr>
                    </tbody>
                </table>
                <button onClick={() => props.cartClearHandler()}>Видалити з кошика</button>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
};

const mapDispatchToProps = dispatch => {
    return {
        cartClearHandler: () => dispatch(clearCart()),
        cartRemoveHandler: product => dispatch(removeFromCart(product))
    };
};

const Cart = connect(
    mapStateToProps,
    mapDispatchToProps
)(CartComponent);

export default Cart;
