import React from "react";
import { createRoot } from "react-dom/client";

import { HelmetProvider } from "react-helmet-async";
import "leaflet/dist/leaflet.css"; // 🔥 HARUS di atas
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);