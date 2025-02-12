import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import ReduxProvider from "./middleware/ReduxProvider";
import ToastProvider from "./middleware/ToastProvider";
import { ErrorProvider } from "./contextapi/ErrorContext";
import ErrorBoundary from "./middleware/ErrorBoundary";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // error boundary
  <ErrorBoundary>
    {/* redux provider */}
    <ReduxProvider>
      {/* error context api provider */}
      <ErrorProvider>
        {/* toast modal */}
        <ToastProvider>
          {/* over all component in app */}
          <App />
        </ToastProvider>
      </ErrorProvider>
    </ReduxProvider>
  </ErrorBoundary>
);

reportWebVitals();
