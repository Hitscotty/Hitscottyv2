import "bootstrap/dist/css/bootstrap.css";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";
import ReactDOMServer from "react-dom/server";

ReactDOM.render(<App />, document.getElementById("root"));

console.log(ReactDOMServer.renderToString(<App />));
