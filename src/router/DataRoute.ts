import Presentation from "../components/Presentation";

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
];
