import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import $ from "jquery";
import Popper from "popper.js";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AppProvider } from "./context/productcontex";
import { FilterContextProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <AppProvider>
      <FilterContextProvider>
        <CartProvider>
          <Auth0Provider
            domain="dev-tp46sswm5yslphkh.us.auth0.com"
            clientId="99s7gvBYrohIC9Mj0qj6Hzr98r0U9OuR"
            authorizationParams={{
              redirect_uri: window.location.origin,
            }}
          >
            <App />
          </Auth0Provider>
        </CartProvider>
      </FilterContextProvider>
    </AppProvider>
  </LocalizationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
