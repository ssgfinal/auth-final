import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { mainPath, navPath } from "../assets/constant/routePath";
// import { AuthCoupon, AuthDeclaration, AuthHouse } from "../pages";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <div
        onClick={() => {
          navigate(mainPath.authMain);
        }}
      >
        홈
      </div>
      <div
        onClick={() => {
          navigate(navPath.authHouse);
        }}
      >
        업체관리
      </div>
      <div
        onClick={() => {
          navigate(navPath.authCoupon);
        }}
      >
        쿠폰관리
      </div>
      <div
        onClick={() => {
          navigate(navPath.authDeclaration);
        }}
      >
        신고관리
      </div>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  background-color: green;
`;
