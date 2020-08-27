import React from "react";
import Styled from "./index.styles";

const Navigation = ({ isBackgroundWhite }) => {
  return (
    <div className="container">
      <Styled.NavToggleIcon>
        <Styled.NavButtonInner />
        <Styled.NavButtonInner />
        <Styled.NavButtonInner />
      </Styled.NavToggleIcon>
      <nav>
        <Styled.NavList isBackgroundWhite={isBackgroundWhite}>
          <li className="nav-item">홈</li>
          <li className="nav-item">소개</li>
          <li className="nav-item">게임목록</li>
          <li className="nav-item">뉴스</li>
          <li className="nav-item">SHOP</li>
          <li className="nav-item">유니크굿컴퍼니</li>
        </Styled.NavList>
      </nav>
    </div>
  );
};

export default Navigation;
