import { Route, Routes } from "react-router-dom";
import "./App.css";
import { navPath, routePath } from "./assets/constant/routePath";
import { RouteWrap } from "./layout";
import { AuthHouse, AuthCoupon, AuthDeclaration, LogIn } from "./pages";
import HouseDelete from "./components/HouseDelete";

function App() {
  return (
    <Routes>
      {/* 중첩 라우팅 */}
      <Route path={routePath.main} element={<RouteWrap />}>
        <Route path={navPath.login} element={<LogIn />}></Route>
        <Route path={navPath.authHouse} element={<AuthHouse />}></Route>
        <Route path={navPath.delHouse} element={<HouseDelete />}></Route>
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
