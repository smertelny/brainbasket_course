import React from "react";

const Cart = (props) => {
    if (!props.cart || props.cart.length === 0) {
        return <div className="dropdown cart-dropdown">В кошику нічого немає :-(</div>;   
    } else {
        return(
            <div className="dropdown cart-dropdown">
                <ul>{props.cart.map((product, index) => <li key={index}>{product.name}: {product.price} {product.currency}</li>) }</ul>
                <button onClick={props.cartClearHandler}>Видалити з кошика</button>
            </div>
        );
    }
};

export default Cart;
