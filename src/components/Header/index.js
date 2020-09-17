import React, { useEffect, useState } from "react";
import Styled from "./index.styles.js";
import logoWhiteImage from "../../images/logo_color_white_horizontal.png";
import logoBlackImage from "../../images/logo_color_black_horizontal.png";

const Header = () => {
  const [pageYOffset, setPageYOffset] = useState(0);
  const [isBackgroundWhite, setIsBackgroundWhite] = useState(false);
  const [isOpenedNav, setIsOpenedNav] = useState(false);

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
    <Styled.HeaderContainer
      className={isOpenedNav ? "active" : ""}
      isBackgroundWhite={isBackgroundWhite}
    >
      <div className="container">
        <div className="wrapper">
          <Styled.Logo
            src={isBackgroundWhite ? logoBlackImage : logoWhiteImage}
          ></Styled.Logo>
          <nav className="container">
            <Styled.ToggleButton
              isBackgroundWhite={isBackgroundWhite}
              onClick={handleClick}
            >
              <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
              <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
              <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
            </Styled.ToggleButton>
            <Styled.NavList
              isBackgroundWhite={isBackgroundWhite}
              isOpenedNav={isOpenedNav}
            >
              <li className="nav-item">홈</li>
              <li className="nav-item">소개</li>
              <li className="nav-item">게임 목록</li>
              <li className="nav-item">뉴스</li>
              <li className="nav-item">SHOP</li>
              <li className="nav-item">유니크굿컴퍼니</li>
            </Styled.NavList>
          </nav>
        </div>
      </div>
    </Styled.HeaderContainer>
  );

  function handleClick() {
    setIsOpenedNav(!isOpenedNav);
  }
};

export default Header;
