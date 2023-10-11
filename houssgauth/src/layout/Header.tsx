import styled from "styled-components";
import { color } from "../assets/theme";

const Header = () => {
  return <LogoTitle>HOUS-SG</LogoTitle>;
};

export default Header;

const LogoTitle = styled.div`
  color: ${color.color1};
  font-size: 48px;
  font-weight: bold;
`;
