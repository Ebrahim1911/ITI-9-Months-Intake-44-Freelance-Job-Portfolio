/* import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Store } from "./src/RTK/Store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
