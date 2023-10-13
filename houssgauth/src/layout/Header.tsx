import styled from "styled-components";
import { color } from "../assets/theme";
import { useNavigate } from "react-router-dom";
import { routePath } from "../assets/constant/routePath";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <LogoTitle>HOUS-SG</LogoTitle>
      <LogInBox
        onClick={() => {
          navigate(routePath.main);
        }}
      >
        로그인 화면으로
      </LogInBox>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const LogoTitle = styled.div`
  color: ${color.color1};
  font-size: 48px;
  font-weight: bold;
  justify-self: center;
`;

const LogInBox = styled.button`
  cursor: pointer;
  text-align: right;
  font-size: small;
  color: ${color.darkGrayColor};
  border: none;
  background-color: ${color.backColor};
`;
