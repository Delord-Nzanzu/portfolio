// Définition du type pour les routes
export interface RouteType {
  path: string;
  component: React.ReactNode;
  exact?: boolean;
}
export const protectedRoutes: RouteType[] = [
  // { path: "/verification", component: <Verification /> },
];
export const publicRoutes :RouteType[]= [];
