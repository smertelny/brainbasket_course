import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers/index";

import App from "./components/App";
import style from "../static/css/style.css";
import style2 from "../static/css/products.css";
import { getLocalData, setLocalData } from "./localStorage";

let store = createStore(rootReducer, getLocalData());

store.subscribe(() => setLocalData(store.getState()));

ReactDOM.render(
    <HashRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </HashRouter>, 
    document.getElementById("root")
);

if (module.hot) {
    module.hot.accept("./components/App", () => {
        const Next = require("./components/App").default;
        ReactDOM.render(<HashRouter><Next /></HashRouter>, document.getElementById("root"));
    });
}
