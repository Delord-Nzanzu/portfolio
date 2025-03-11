import Competence from "../components/Competence";
import Contacter from "../components/Contacter";
import Presentation from "../components/Presentation";
import Realisation from "../components/Realisation";
import Service from "../components/Service";

// Définition du type pour les routes
export interface RouteType {
  path: string;
  component: React.ElementType;
  exact?: boolean;
}
export const protectedRoutes: RouteType[] = [
  // { path: "/verification", component: <Verification /> },
];
export const publicRoutes: RouteType[] = [
  { path: "/", component: Presentation, exact: true },
  { path: "/services", component: Service },
  { path: "/contact", component: Contacter },
  { path: "/competence", component: Competence },
  { path: "/realisation", component: Realisation },

];
