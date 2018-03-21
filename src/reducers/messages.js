import { 
    ADD_TO_CART,
    MESSAGE_DISMISS,
    FETCH_PRODUCTS_ERROR,
    ADD_FUNC
} from "../actions/actions";

export default function message(state={isDisplaying: false, text: "", func: () => {},type: ""}, action) {
    switch(action.type) {
    case ADD_TO_CART:
        return { isDisplaying: true, text: action.product.name, type: "success" };
    case ADD_FUNC:
        return {...state, func: action.func}
    case FETCH_PRODUCTS_ERROR:
        return { isDisplaying: true, text: action.error, type: "error" };
    case MESSAGE_DISMISS:
        return { isDisplaying: false, text: state.text };
    default:
        return state;
    }
}
