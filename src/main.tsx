import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Normaliza trailing slash ANTES do mount: /corte-e-dobra/ → /corte-e-dobra.
// Evita URL duplicada no GA4/Clarity (ex.: 124 sessões em /corte-e-dobra/ no Clarity).
// React Router já trata os dois como a mesma rota; aqui só corrigimos a URL visível.
const { pathname, search, hash } = window.location;
if (pathname.length > 1 && pathname.endsWith("/")) {
  window.history.replaceState(null, "", pathname.replace(/\/+$/, "") + search + hash);
}

createRoot(document.getElementById("root")!).render(<App />);
