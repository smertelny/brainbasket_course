import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, HashRouter } from "react-router-dom";

import App from './components/App';
import style from '../static/css/style.css';
import style2 from '../static/css/products.css';

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById("root")
);

// if (module.hot) {
//     module.hot.accept("./App", () => {
//         const Next = require("./App").default;
//         ReactDOM.render(<Next />, document.getElementById("root"));
//     });
// }
