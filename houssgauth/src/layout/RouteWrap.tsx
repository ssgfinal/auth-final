import { Outlet } from "react-router-dom";
import { Footer, Header, Nav } from ".";
import styled from "styled-components";

const RouteWrap = () => {
  return (
    <Wrapper>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </Wrapper>
  );
};

export default RouteWrap;

const Wrapper = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
`;
