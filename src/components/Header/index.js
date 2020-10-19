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
          <a href="/">
            <Styled.Logo
              src={isBackgroundWhite ? logoBlackImage : logoWhiteImage}
            />
          </a>

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
              <li className="nav-item">
                <a href="/">홈</a>
              </li>

              <li className="nav-item">
                <a href="https://realworld.to/About">소개</a>
              </li>
              <li className="nav-item">
                <a href="https://realworld.to/projects">게임 목록</a>
              </li>

              <li className="nav-item">
                <a href="https://realworld.to/boards/news">뉴스</a>
              </li>

              <li className="nav-item">
                <a
                  href="https://smartstore.naver.com/realworld"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SHOP
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="https://uniquegood.biz/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  유니크굿컴퍼니
                </a>
              </li>
              {/* <a href="/">
                <li className="nav-item">홈</li>
              </a>

              <a href="https://realworld.to/About">
                <li className="nav-item">소개</li>
              </a>

              <a href="https://realworld.to/projects">
                <li className="nav-item">게임 목록</li>
              </a>

              <a href="https://realworld.to/boards/news">
                <li className="nav-item">뉴스</li>
              </a>

              <a
                href="https://smartstore.naver.com/realworld"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="nav-item">SHOP</li>
              </a>

              <a
                href="https://uniquegood.biz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <li className="nav-item">유니크굿컴퍼니</li>
              </a> */}
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
