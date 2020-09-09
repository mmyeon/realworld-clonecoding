import React, { useEffect, useState } from "react";
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
    props.isBackgroundWhite ? "#fff" : "rgba(100, 100, 100, 0.6)"};

  z-index: 10;
  transition: 0.3s;

  > .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    max-width: 1140px;
    margin: 0 auto;
  }
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

const Header = () => {
  const [pageYOffset, setPageYOffset] = useState(0);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPageYOffset(window.pageYOffset);

      setIsBackgroundWhite(pageYOffset > 100 ? true : false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pageYOffset, isBackgroundWhite]);

  return (
    <HeaderContainer isBackgroundWhite={isBackgroundWhite}>
      <div className="container">
        <Logo src={isBackgroundWhite ? logoBlackImage : logoWhiteImage}></Logo>
        <Navigation isBackgroundWhite={isBackgroundWhite} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
