import React from "react";

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
            <li className="dropdown_btn"><a href="#">Кошик</a>
                <Cart />
            </li>
            
        </ul>
    </nav>
);

export default Navbar;
