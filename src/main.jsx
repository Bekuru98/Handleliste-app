// Den importerer strictMode fra React på en måte som brukes til å finne potensielle problemer i appen.
import { StrictMode } from "react";
// Det er en slags importfunksjon for å opprette REACT-rot i DOM.
import { createRoot } from "react-dom/client";
// importerer global css
import "./index.css";
// importerer hovdkomponentetn til appen
import App from "./App";
// Det er en lagere på React-root i HTML-elemenet emd id="root" og rendere app kompontet inni strictMODE.

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
