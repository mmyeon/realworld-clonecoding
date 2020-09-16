import React, { useEffect, useState } from "react";
import Styled from "./index.styles.js";
import logoWhiteImage from "../../images/logo_color_white_horizontal.png";
import logoBlackImage from "../../images/logo_color_black_horizontal.png";
import Navigation from "../Navigation";
// import { device } from "../../device";

// const HeaderContainer = styled.header`
//   position: fixed;
//   width: 100%;
//   height: 56px;
//   background: ${(props) => (props.isBackgroundWhite ? "#fff" : "#05040469")};
//   z-index: 10;
//   transition: 0.3s;

//   > .container {
//     display: flex;
//     align-items: center;
//     height: 100%;
//     max-width: 1140px;
//     margin: 0 auto;
//     justify-content: space-between;
//     padding: 0 15px;

//     @media all and (max-width: 1199px) {
//       max-width: 954px;
//     }

//     @media all and (max-width: 991px) {
//       max-width: 755px;
//     }

//     @media all and (max-width: 767px) {
//       max-width: 575px;
//     }
//   }
// `;

// const Logo = styled.img`
//   width: 170px;
//   padding-left: 10px;
//   cursor: pointer;

//   @media ${device.tablet} {
//     max-width: 954px;
//   }
// `;

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
    <Styled.HeaderContainer isBackgroundWhite={isBackgroundWhite}>
      <div className="container">
        <Styled.Logo
          src={isBackgroundWhite ? logoBlackImage : logoWhiteImage}
        ></Styled.Logo>
        <Navigation
          isBackgroundWhite={isBackgroundWhite}
          handleClick={handleClick}
        />
      </div>
    </Styled.HeaderContainer>
  );

  function handleClick() {
    setIsOpenedNav(!isOpenedNav);
    console.log("clicked");
  }
};

export default Header;
