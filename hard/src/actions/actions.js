import * as api from "../fakeApi";
import { PRODUCTS } from "../constants";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const MESSAGE_DISMISS = "MESSAGE_DISMISS";
export const CHANGE_FILTER = "CHANGE_FILTER";
export const FETCH_PRODUCTS_REQUEST = "FETCH_PRODUCTS_REQUEST";
export const FETCH_PRODUCTS_RECIEVED = "FETCH_PRODUCTS_RECIEVED";
export const FETCH_PRODUCTS_ERROR = "FETCH_PRODUCTS_ERROR";

function add_to_cart(product, set_quantity=1) {
    return { type: ADD_TO_CART, product, set_quantity };
}

export function removeFromCart(product) {
    return { type: REMOVE_FROM_CART, product };
}

export function clearCart() {
    return { type: CLEAR_CART };
}

export function msgDismiss() {
    return { type: MESSAGE_DISMISS };
}

export function addToCart(product, set_quantity=1) {
    return dispatch => {
        dispatch(add_to_cart(product, set_quantity));
        setTimeout(() => {
            dispatch(msgDismiss());
        }, 3000);
    };
}

export function changeFilter(filter) {
    return {type: CHANGE_FILTER, filter};
}

export function getVisibleProducts(products, filter) {
    switch(filter) {
    case "all":
        return products;
    default:
        return {...products, items: products.items.filter(item => item.genre.find(
            elem => elem === filter
        ))};
    }
}

export function getProducts() {
    return dispatch => {
        dispatch({type: FETCH_PRODUCTS_REQUEST});
        api.getProducts("/books").then( response => 
            dispatch({type: FETCH_PRODUCTS_RECIEVED, products: response})
        ).catch(err => { return dispatch => 
            dispatch({type: FETCH_PRODUCTS_ERROR, error: err});
            setTimeout(() => {
                dispatch(msgDismiss());
            }, 5000);
        });
    };
}
