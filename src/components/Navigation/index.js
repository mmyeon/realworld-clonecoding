import React, { useState } from "react";
import Styled from "./index.styles";

const Navigation = ({ isBackgroundWhite }) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    setIsVisible(!isVisible);
  }

  return (
    <div className="container" onClick={handleClick}>
      <Styled.ToggleButton isBackgroundWhite={isBackgroundWhite}>
        <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
        <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
        <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
      </Styled.ToggleButton>
      <nav>
        <Styled.NavList
          isBackgroundWhite={isBackgroundWhite}
          style={isVisible ? { display: "block" } : { display: "none" }}
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
  );
};

export default Navigation;
