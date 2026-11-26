import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./scss/styles.scss";

// OPTIONAL: Import Bootstrap JS bundle if needed
import "bootstrap/dist/js/bootstrap.bundle.min";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
