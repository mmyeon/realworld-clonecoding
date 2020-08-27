import React from "react";
import styled from "styled-components";
import logoWhiteImage from "../../images/logo_color_white_horizontal.png";
import logoBlackImage from "../../images/logo_color_black_horizontal.png";
import Navigation from "../Navigation";
import { device } from "../../device";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 57px;
  background: ${(props) =>
    props.pageYOffset >= 50 ? "#fff" : "rgba(100, 100, 100, 0.6)"};
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  transition: 0.3s;
`;

const Logo = styled.img`
  width: 170px;
  padding-left: 10px;
  cursor: pointer;
  margin-right: 260px;

  @media ${device.tablet} {
    margin-right: 450px;
  }
  @media ${device.mobileL} {
    margin-right: 260px;
  }
`;

const Header = ({ pageYOffset }) => {
  return (
    <HeaderContainer pageYOffset={pageYOffset}>
      <Logo src={pageYOffset > 50 ? logoBlackImage : logoWhiteImage}></Logo>
      <Navigation />
    </HeaderContainer>
  );
};

export default Header;
