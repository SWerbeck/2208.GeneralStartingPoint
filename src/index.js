import React from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components";
import { BrowserRouter } from "react-router-dom";

/* Import and destructure main from src/component/index.js 
and anything else you may need here */

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
