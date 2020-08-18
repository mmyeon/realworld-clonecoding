import React from "react";
import Styled from "./index.styles";

const Navigation = () => {
  return (
    <Styled.Container>
      <Styled.NavToggleIcon>
        <Styled.NavButtonInner />
        <Styled.NavButtonInner />
        <Styled.NavButtonInner />
      </Styled.NavToggleIcon>
      <nav>
        <div className="nav-list">
          <li className="nav-item">홈</li>
          <li className="nav-item">소개</li>
          <li className="nav-item">게임목록</li>
          <li className="nav-item">뉴스</li>
          <li className="nav-item">SHOP</li>
          <li className="nav-item">유니크굿컴퍼니</li>
        </div>
      </nav>
      {/* TODO:루트 이동하기 */}
    </Styled.Container>
  );
};

export default Navigation;
