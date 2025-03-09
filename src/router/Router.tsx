import { Route, Routes } from "react-router-dom";
import { protectedRoutes, publicRoutes } from "./DataRoute";
import ProtectRoutes from "./ProtectRoute";

export default function Router() {
  return (
    <Routes>
      <Route>
        {
          //router public
          publicRoutes.map((e, indexs) => (
            <Route
              key={indexs}
              path={e?.path}
              element={e?.component}
              // exact={e?.exact}
            />
          ))
        }
      </Route>

      <Route element={<ProtectRoutes />}>
        {
          //Router protect
          protectedRoutes.map((e, indexs) => (
            <Route key={indexs} path={e.path} element={e.component} />
          ))
        }
      </Route>
    </Routes>
  );
}
