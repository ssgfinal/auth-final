import { Route, Routes } from "react-router-dom";
import "./App.css";
import { navPath, routePath } from "./assets/constant/routePath";
import { RouteWrap } from "./layout";
import {
  AuthHouse,
  AuthDelete,
  AuthCoupon,
  AuthDeclaration,
  LogIn,
} from "./pages";

function App() {
  return (
    <Routes>
      {/* 중첩 라우팅 */}
      <Route path={routePath.main} element={<LogIn />}></Route>
      <Route path={navPath.authHouse} element={<RouteWrap />}>
        <Route index element={<AuthHouse />}></Route>
        <Route path={navPath.delHouse} element={<AuthDelete />}></Route>
        <Route path={navPath.authCoupon} element={<AuthCoupon />}></Route>
        <Route
          path={navPath.authDeclaration}
          element={<AuthDeclaration />}
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
