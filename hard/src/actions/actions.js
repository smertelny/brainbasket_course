export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";


function add_to_cart(product, set_quantity=1) {
    return { type: ADD_TO_CART, product, set_quantity };
}

export function removeFromCart(product) {
    return { type: REMOVE_FROM_CART, product };
}

export function clearCart() {
    return { type: CLEAR_CART };
}

function msgDismiss() {
    return { type: "MESSAGE_DISMISS" };
}

export function addToCart(product, set_quantity=1) {
    return dispatch => {
        dispatch(add_to_cart(product, set_quantity));
        setTimeout(() => {
            dispatch(msgDismiss());
        }, 3000);
    };
}