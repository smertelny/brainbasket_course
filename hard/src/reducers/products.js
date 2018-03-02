

export default function products(state={
    isFetching: false,
    items: []
}, action) {
    switch(action.type) {
    case "FETCH_PRODUCTS_REQUEST":
        return {...state, isFetching: true};
    case "FETCH_PRODUCTS_RECIEVED":
        return {isFetching: false, items: action.products};
    case "FETCH_PRODUCTS_ERROR":
        return {isFetching: false, items: []}
    default:
        return state;
    }
}