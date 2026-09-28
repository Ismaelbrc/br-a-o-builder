import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { withTrailingSlash } from "./lib/trailingSlash";

// Normaliza a URL visível para a forma canônica (COM barra final) ANTES do mount:
// /corte-e-dobra → /corte-e-dobra/. Alinha URL, canonical, sitemap, GA4 e Clarity.
// React Router trata as duas formas como a mesma rota; aqui só corrigimos a URL.
const { pathname, search, hash } = window.location;
const canonicalPath = withTrailingSlash(pathname);
if (canonicalPath !== pathname) {
  window.history.replaceState(null, "", canonicalPath + search + hash);
}

createRoot(document.getElementById("root")!).render(<App />);
