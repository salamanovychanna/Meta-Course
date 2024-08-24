import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import store from "./store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop.js";
import { AuthProvider } from './context/AuthProvider.js'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </AuthProvider>
  </BrowserRouter>
);
