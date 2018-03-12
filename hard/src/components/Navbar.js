import React from "react";
import { connect } from 'react-redux';

import Cart from "./Cart";

const Navbar = (props) => (
    <nav className="main-menu">
        <ul className="left">
            <li className="brand"><a href="#">MyAwesomeShop</a></li>
        </ul>
        <ul>
            <li className="dropdown_btn"><a href="#">Dumb link</a>
                <div className="dropdown">
                    <ul>
                        <li><a href="#">Dropdown dumb link</a></li>
                        <li><a href="#">Dropdown dumb link</a></li>
                        <li><a href="#">Dropdown dumb link</a></li>
                    </ul>
                </div>
            </li>
            <li className="dropdown_btn">
                <a 
                onClick={() => props.cartClickHandler()} href="#">Кошик</a>
            </li>
            
        </ul>
    </nav>
);

const mapDispatchToProps = (dispatch) => {
    return {
        cartClickHandler: () => dispatch(
            {type:"CHANGE_CART_VISIBILITY"}
        )
    }
}

export default connect(null, mapDispatchToProps)(Navbar);
