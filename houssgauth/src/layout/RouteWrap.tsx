import { Outlet } from "react-router-dom";
import { Footer, Header, Nav } from ".";

const RouteWrap = () => {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default RouteWrap;
