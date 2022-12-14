import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "primeicons/primeicons.css";
import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>,
);
