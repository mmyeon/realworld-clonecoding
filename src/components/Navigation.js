import React from "react";
import styled from "styled-components";

const NavList = styled.ul`
  display: flex;
  color: white;
  z-index: 10;

  @media (max-width: 991px) {
    display: none;
  }
`;

const NavItem = styled.li`
  color: white;
  padding: 10px 12px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;

  &:hover {
    background: black;
    z-index: 100;
    opacity: 100;
  }
`;

const Navigation = () => {
  return (
    <div>
      <NavList>
        {/* TODO:루트 이동하기 */}
        <NavItem>홈</NavItem>
        <NavItem>소개</NavItem>
        <NavItem>게임 목록</NavItem>
        <NavItem>뉴스</NavItem>
        <NavItem>SHOP</NavItem>
        <NavItem>유니크굿컴퍼니</NavItem>
      </NavList>
    </div>
  );
};

export default Navigation;
