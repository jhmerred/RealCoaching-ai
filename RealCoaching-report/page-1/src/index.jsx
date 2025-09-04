import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Report } from "./screens/Report";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Report />
  </StrictMode>,
);
