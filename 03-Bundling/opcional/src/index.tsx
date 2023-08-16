import React from "react";
import { createRoot } from "react-dom/client";
import { HelloComponent } from "./HelloComponent";
import logo from "./content/logo_1.png";

const root = createRoot(document.getElementById("root"));
root.render(
    <div>
        <h1>Hello React</h1>
        <img src={logo} alt="Logo" />
        <span>Éste es el opcional de Webpack</span>
        <HelloComponent />
    </div>
);