// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TransitionProvider } from "./context/TransitionContext.jsx"; // Import the provider

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TransitionProvider> {/* Wrap the App */}
      <App />
    </TransitionProvider>
  </BrowserRouter>
);
