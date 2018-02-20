import React from "react";

const Cart = (props) => {
    if (!props.cart || props.cart.length === 0) {
        return <div className="dropdown cart-dropdown">В кошику нічого немає :-(</div>;   
    } else {
        return(
            <div className="dropdown cart-dropdown">
                <table style={{borderCollapse: "collapse"}}>
                <tbody>
                    <tr>
                        <td>Товар</td>
                        <td>К-сть</td>
                        <td>Ціна</td>                        
                    </tr>
                {props.cart.map((product, index) => <tr key={index} style={{textAlign: "center"}}><td>{product.name}</td><td>{product.quantity}</td><td>{product.price} {product.currency}</td></tr>) }
                    <tr style={{borderTop: "2px solid black"}}>
                        <td colSpan={2}>Всього</td>
                        <td>??? UAH</td>
                    </tr>
                </tbody>
                </table>
                <button onClick={props.cartClearHandler}>Видалити з кошика</button>
            </div>
        );
    }
};

export default Cart;
