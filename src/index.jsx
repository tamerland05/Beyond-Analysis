import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import App from "./app/App";
import "./css/style.css"

import "perfect-scrollbar/css/perfect-scrollbar.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);


serviceWorker.unregister();
