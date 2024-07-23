import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./assets/scss/main.scss";
import { NavbarProvider } from "./components/NavbarContext";
import { Preloader } from "./components/Preloader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Preloader>
      <NavbarProvider>
        <App />
      </NavbarProvider>
    </Preloader>
  </React.StrictMode>
);

reportWebVitals();
