import React from "react";
import { connect } from 'react-redux';

import Cart from "./Cart";

const Navbar = (props) => (
    <nav className="main-menu">
        <ul className="left">
            <li className="brand"><a href="#">MyAwesomeShop</a></li>
        </ul>
        <ul>
            <li className="dropdown_btn">
                <a 
                onClick={e => props.cartClickHandler(e)} href="#">Кошик <span className="cart__badge">{ Object.keys(props.cart).map(id => props.cart[id].quantity).reduce((prev, curr) => prev + curr, 0) }</span></a>
            </li>
            
        </ul>
    </nav>
);

const mapStateToProps = state => {
    return {
        cart: state.cart.items,
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        cartClickHandler: event => {
            event.preventDefault();
            return dispatch(
                {type:"CHANGE_CART_VISIBILITY"}
            )
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
