import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import rootReducer from "./reducers/index";
import App from "./components/App";
import style from "../static/css/style.css";
import style2 from "../static/css/products.css";
import style3 from "../static/css/cart.css";
import { getLocalData, setLocalData } from "./localStorage";

let store = createStore(
    rootReducer,
    getLocalData(),
    applyMiddleware(thunk)
);

store.subscribe(() => setLocalData(store.getState()));
if (process.env.NODE_ENV !== 'production') {
    store.subscribe(() => console.log(store.getState()));
}

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, 
    document.getElementById("root")
);

document.addEventListener('keydown', e => {
    if (store.getState().cart.visible && e.keyCode === 27) {
        store.dispatch({type: "CHANGE_CART_VISIBILITY"})
    }
});

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const Next = require("./components/App").default;
        ReactDOM.render(<HashRouter><Next /></HashRouter>, document.getElementById("root"));
    });
}
