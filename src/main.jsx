import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// Import  custom styles (includes Bootstrap overrides)
import "./assets/scss/custom.scss";

// OPTIONAL: Import Bootstrap JS bundle if needed
import "bootstrap/dist/js/bootstrap.bundle.min";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
