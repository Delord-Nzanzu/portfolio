import { useContext } from "react";
import { ThemeContext } from "../components/context/Context";

// Définir un hook personnalisé
const useMyContext = () => {
  const context = useContext(ThemeContext);

  // Vérification pour éviter que le contexte soit `undefined`
  if (!context) {
    throw new Error("useMyContext must be used within a ThemeProviderComponent");
  }

  return context;
};

export default useMyContext;
