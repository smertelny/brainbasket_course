import { combineReducers } from "redux";

import cart from './cart';
import message from './messages';
import products from './products';
import filter from './filter';

const rootReducer = combineReducers({
    cart,
    message,
    products,
    filter
});

export default rootReducer;
