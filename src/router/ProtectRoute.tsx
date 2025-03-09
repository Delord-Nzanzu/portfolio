import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoutes: React.FC = () => {
  const [isAuth] = React.useState<string | null>(
    localStorage.getItem("isAuth")
  );

  return isAuth === "true" ? <Outlet /> : <Navigate to="/error" />;
};

export default ProtectRoutes;
