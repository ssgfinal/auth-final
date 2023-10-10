import { Routes, Route } from "react-router-dom";
import { navPath, routePath } from "../assets/constant/routePath";
import { AuthHouse, AuthCoupon, AuthDeclaration } from ".";
import { RouteWrap } from "../layout";

const AuthMain = () => {
  return (
    <div>
      <Routes>
        {/* 중첩 라우팅 */}
        <Route path={routePath.main} element={<RouteWrap />}>
          <Route path={navPath.authHouse} element={<AuthHouse />}></Route>
          <Route path={navPath.authCoupon} element={<AuthCoupon />}></Route>
          <Route
            path={navPath.authDeclaration}
            element={<AuthDeclaration />}
          ></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default AuthMain;
