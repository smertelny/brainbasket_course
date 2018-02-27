import { getProducts } from "../fakeApi";
import { PRODUCTS } from "../constants";

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

export function msgDismiss() {
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

export function changeFilter(products, filter) {
    return {type: "CHANGE_FILTER", products, filter };
}

export function getVisibleProducts(products, filter) {
    switch(filter.filter) {
    case "":
    case "all":
        return products;
    default:
        return {items: products.items.filter(item => item.genre.find(
            elem => elem.toLowerCase() === filter.filter
        ))};
    }
}

export function getPosts() {
    return dispatch => {
        dispatch({type:"PRODUCTS_REQUEST"});
        getProducts("/books").then( response => 
            dispatch({type:"PRODUCTS_RECIEVED", products: response})
        ).catch(err => console.log(err));
    };
}
