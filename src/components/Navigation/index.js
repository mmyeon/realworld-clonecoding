import React from "react";
import Styled from "./index.styles";

const Navigation = ({ isBackgroundWhite }) => {
  return (
    <div className="container">
      <Styled.ToggleButton isBackgroundWhite={isBackgroundWhite}>
        <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
        <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
        <Styled.ToggleButtonInner isBackgroundWhite={isBackgroundWhite} />
      </Styled.ToggleButton>
      <nav>
        <Styled.NavList isBackgroundWhite={isBackgroundWhite}>
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
