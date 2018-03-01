import { combineReducers } from "redux";

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from "../actions/actions";

function cart(state=[], action) {
    switch (action.type) {
    case ADD_TO_CART:
        let quant = action.set_quantity || 1;
        if (state.find( elem => elem.id === action.product.id) === undefined) {   
            return [
                ...state,
                { ...action.product, quantity: quant }
            ];
        } else {
            return state.map(prod => {
                if (prod.id === action.product.id) {
                    return {...prod, quantity: prod.quantity + quant};
                } else {
                    return prod;
                }
            });
        }
    case REMOVE_FROM_CART:
        if (action.product.quantity) {
            if (state.find(el => el.id === action.product.id && el.quantity === 1)) {
                return state.filter(el => el.id !== action.product.id);
            } else {
                return state.map(el => {
                    if (el.id === action.product.id && el.quantity > 1) {
                        return {...el, quantity: el.quantity -1 };
                    } else {
                        return el;
                    }
                });
            }
        } else {
            return state;
        }
    case CLEAR_CART:
        return [];
    default:
        return state;
    }
}

function message(state={ isDisplaing: false, text: ""}, action) {
    switch(action.type) {
    case ADD_TO_CART:
        return { isDisplaing: true, text: action.product.name};
    case "MESSAGE_DISMISS":
        return { isDisplaing: false, text: "" };
    default:
        return state;
    }
}

function products(state={
    isFetching: false,
    items: []
}, action) {
    switch(action.type) {
    case "PRODUCTS_REQUEST":
        return {...state, isFetching: true};
    case "PRODUCTS_RECIEVED":
        return {isFetching: false, items: action.products};
    default:
        return state;
    }
}

function filter(state="all", action) {
    switch(action.type){
    case("CHANGE_FILTER"):
        return action.filter;
    default:
        return state;
    }
}

const rootReducer = combineReducers({
    cart,
    message,
    products,
    filter
});

export default rootReducer;
