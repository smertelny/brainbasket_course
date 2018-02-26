export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";


export function addToCart(product, set_quantity=1) {
    return { type: ADD_TO_CART, product, set_quantity };
}

export function removeFromCart(product) {
    return { type: REMOVE_FROM_CART, product };
}

export function clearCart() {
    return { type: CLEAR_CART };
}
