import React, { createContext, useState, useMemo, ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// Type pour le contexte
interface ThemeContextType {
  mode: "light" | "dark"; // Le mode peut être soit "light" soit "dark"
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>; // Fonction pour changer le mode
}

// Création du contexte avec un type spécifique
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Type pour les props du composant ThemeProviderComponent
interface ThemeProviderComponentProps {
  children: ReactNode; // Déclare children comme un noeud React (composants enfants)
}

const ThemeProviderComponent = ({ children }: ThemeProviderComponentProps) => {
  const [mode, setMode] = useState<"light" | "dark">("light"); // État pour gérer le mode (clair ou sombre)

  // Créer un thème basé sur l'état `mode`
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode, // 'light' ou 'dark'
        },
      }),
    [mode]
  );

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline /> {/* Applique la normalisation des styles CSS */}
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProviderComponent };
