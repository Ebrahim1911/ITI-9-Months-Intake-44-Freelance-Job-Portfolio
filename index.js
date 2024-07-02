import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Store } from "./src/RTK/Store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <Provider store={Store}>
    <App />
  </Provider>
);
