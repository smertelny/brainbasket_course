import { combineReducers } from "redux";

import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
} from "../actions/actions";

// function cart(state=[], action) {
//     switch (action.type) {
//     case ADD_TO_CART:
//         let quant = action.set_quantity || 1;
//         if (state.find( elem => elem.id === action.product.id) === undefined) {   
//             return [
//                 ...state,
//                 { ...action.product, quantity: quant }
//             ];
//         } else {
//             return state.map(prod => {
//                 if (prod.id === action.product.id) {
//                     return {...prod, quantity: prod.quantity + quant};
//                 } else {
//                     return prod;
//                 }
//             });
//         }
//     case REMOVE_FROM_CART:
//         if (action.product.quantity) {
//             if (state.find(el => el.id === action.product.id && el.quantity === 1)) {
//                 return state.filter(el => el.id !== action.product.id);
//             } else {
//                 return state.map(el => {
//                     if (el.id === action.product.id && el.quantity > 1) {
//                         return {...el, quantity: el.quantity -1 };
//                     } else {
//                         return el;
//                     }
//                 });
//             }
//         } else {
//             return state;
//         }
//     case CLEAR_CART:
//         return [];
//     default:
//         return state;
//     }
// }


function cart(state={}, action) {
    switch(action.type) {
        case ADD_TO_CART:
        if (state[action.product.id]) {
            return {
                ...state,
                [action.product.id]: {...action.product, quantity:state[action.product.id].quantity + 1}
            }
        } else {
            return {
                ...state,
                [action.product.id]: {...action.product, quantity: 1}
            }
        }
        case REMOVE_FROM_CART:
            if (state[action.product.id].quantity > 1) {
                return {
                    ...state,
                    [action.product.id]: {...state[action.product.id], quantity: state[action.product.id].quantity - 1}
                }
            } else {
                const {
                    [action.product.id.toString()]:d,
                    ...rest
                } = state;
                return rest;
            }
        case CLEAR_CART:
            return {};
        default:
            return state;
    }
}

function cartVisible(state=false, action) {
    switch(action.type) {
        case "CHANGE_CART_VISIBILITY":
            return !state;
        default:
            return state;
    }
}



export default combineReducers({items:cart, visible:cartVisible});