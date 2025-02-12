import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./middleware/ReduxProvider";
import ToastProvider from "./middleware/ToastProvider";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReduxProvider>
    <ToastProvider>
      <App />
    </ToastProvider>
  </ReduxProvider>
);

reportWebVitals();
