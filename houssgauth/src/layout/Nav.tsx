import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { navPath } from "../assets/constant/routePath";
import { color } from "../assets/theme";
// import { AuthCoupon, AuthDeclaration, AuthHouse } from "../pages";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <NavWrapper>
      <AuthHouse
        onClick={() => {
          navigate(navPath.authHouse);
        }}
      >
        숙소관리
      </AuthHouse>
      <AuthCoupon
        onClick={() => {
          navigate(navPath.authCoupon);
        }}
      >
        쿠폰관리
      </AuthCoupon>
      <AuthDeclaration
        onClick={() => {
          navigate(navPath.authDeclaration);
        }}
      >
        신고관리
      </AuthDeclaration>
    </NavWrapper>
  );
};

export default Nav;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  color: ${color.backColor};
  background-color: ${color.color1};
  padding: 0.8rem;
  margin: 0.8rem 0;
  font-size: 1.1rem;
`;

const AuthHouse = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const AuthCoupon = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;

const AuthDeclaration = styled.div`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`;
