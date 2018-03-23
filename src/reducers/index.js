import { combineReducers } from "redux";

import cart from './cart';
import message from './messages';
import products from './products';
import filter from './filter';
import genres from "./genres";

const rootReducer = combineReducers({
    cart,
    message,
    products,
    filter,
    genres
});

export default rootReducer;
