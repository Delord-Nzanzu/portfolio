import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProviderComponent } from "./components/context/Context.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProviderComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProviderComponent>
  </StrictMode>
);
