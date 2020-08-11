import React from "react";
import styled from "styled-components";
import logoWhiteImage from "../images/logo_color_white_horizontal.png";
import logoBlackImage from "../images/logo_color_black_horizontal.png";
import Navigation from "../components/Navigation";
import { device } from "../device";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 57px;
  background: rgba(100, 100, 100, 0.6);
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 20px;

  @media ${device.tablet} {
    justify-content: space-between;
    padding: 0 120px;
  }
`;

const Logo = styled.img`
  width: 170px;
  padding-left: 10px;
  cursor: pointer;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo src={logoWhiteImage}></Logo>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
