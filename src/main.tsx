import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

import "@fontsource-variable/geist";
import "@fontsource-variable/geist-mono";
import "@fontsource-variable/archivo";
import "@fontsource/instrument-serif/400.css";
import "@fontsource/instrument-serif/400-italic.css";
import "./index.css";

import { App } from "./app";
import type { Locale } from "./content/site";

const locale: Locale = /^\/en(\/|$)/.test(window.location.pathname) ? "en" : "pt-BR";
const root = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App locale={locale} />
  </StrictMode>
);

// Production pages are prerendered (scripts/prerender.js); dev serves an empty shell.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
