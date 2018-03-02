import { 
    ADD_TO_CART,
    MESSAGE_DISMISS,
    FETCH_PRODUCTS_ERROR
} from "../actions/actions";

export default function message(state={ isDisplaing: false, text: ""}, action) {
    switch(action.type) {
    case ADD_TO_CART:
        return { isDisplaing: true, text: action.product.name, type: "success"};
    case FETCH_PRODUCTS_ERROR:
        return { isDisplaing: true, text: action.error, type: "error" };
    case MESSAGE_DISMISS:
        return { isDisplaing: false, text: "" };
    default:
        return state;
    }
}
