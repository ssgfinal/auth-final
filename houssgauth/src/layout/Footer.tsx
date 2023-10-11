import styled from "styled-components";

const Footer = () => {
  return (
    <FooterWrapper>
      <small>Copyright &copy;houssg</small>
    </FooterWrapper>
  );
};

export default Footer;

const FooterWrapper = styled.footer`
  position: absolute;
  width: 100%;
  height: 110px;
`;
