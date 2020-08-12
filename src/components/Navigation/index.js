import React from "react";

import Styled from "./index.styles";

const Navigation = () => {
  return (
    <div>
      <Styled.NavToggleIcon>
        <Styled.NavButtonInner />
        <Styled.NavButtonInner />
        <Styled.NavButtonInner />
      </Styled.NavToggleIcon>
      <Styled.NavList>
        {/* TODO:루트 이동하기 */}
        <Styled.NavItem>홈</Styled.NavItem>
        <Styled.NavItem>소개</Styled.NavItem>
        <Styled.NavItem>게임 목록</Styled.NavItem>
        <Styled.NavItem>뉴스</Styled.NavItem>
        <Styled.NavItem>SHOP</Styled.NavItem>
        <Styled.NavItem>유니크굿컴퍼니</Styled.NavItem>
      </Styled.NavList>
    </div>
  );
};

export default Navigation;
