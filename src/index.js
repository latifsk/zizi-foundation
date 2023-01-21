import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./assets/fonts/SourceCodePro-Regular.ttf";
import reportWebVitals from "./reportWebVitals";
<<<<<<< HEAD
=======
import { HashRouter } from "react-router-dom";
>>>>>>> b166417131c37040c88955f7fec7dca26919da9e

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <HashRouter >
      <App />
    </HashRouter>
>>>>>>> b166417131c37040c88955f7fec7dca26919da9e
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// export const rootDOM = root;
