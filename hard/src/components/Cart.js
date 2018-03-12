import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { clearCart, removeFromCart } from "../actions/actions";

const CartComponent = (props) => {
    if (!props.cart || Object.keys(props.cart).length === 0) {
        return <div className={!props.visible ? "hidden" : null}>В кошику нічого немає :-(</div>;   
    } else {
        return(
            <div className={!props.visible ? "hidden" : null}>
                <table style={{borderCollapse: "collapse"}}>
                    <tbody>
                        <tr style={{borderBottom: "2px solid black"}}>
                            <td>Товар</td>
                            <td>К-сть</td>
                            <td>Ціна</td>
                            <td></td>                        
                        </tr>
                        {Object.keys(props.cart).map((id, index) => (
                            <tr key={index}>
                                <td style={{textAlign: "left"}}><Link to={`/book/${props.cart[id].id}`} replace>{props.cart[id].name}</Link></td>
                                <td>{props.cart[id].quantity}</td>
                                <td>{props.cart[id].price} {props.cart[id].currency}</td>
                                <td style={{textAlign: "center"}}><button onClick={() => props.cartRemoveHandler(props.cart[id])} style={{color: "red"}}>&#10006;</button></td>
                            </tr>)
                        )}
                        <tr style={{borderTop: "2px solid black"}}>
                            <td colSpan={3}>Всього</td>
                            {/* <td>{Object.keys(props.cart).map(id => props.cart[id].price * props.cart[id].quantity ).reduce((prev, curr) => prev + curr).toFixed(2)} UAH</td> */}
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
