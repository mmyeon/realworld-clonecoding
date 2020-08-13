import styled from "styled-components";
import { device } from "../../device";

// const Container = styled.section`
//   > nav {
//   }
// `;

const NavList = styled.ul`
  display: flex;
  color: white;
  z-index: 10;

  @media ${device.tablet} {
    /* TODO: 나중에 보이도록 수정 */
    display: none;
    left: 0;
    top: 57px;
    flex-direction: column;
    padding: 0 80px;
    padding-bottom: 8px;
    position: absolute;
    width: 100%;
    background: rgba(100, 100, 100, 0.6);
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
  }
`;

const NavToggleIcon = styled.div`
  @media ${device.tablet} {
    display: block;
    margin-right: 12px;
    display: flex;
    flex-direction: column;
    padding: 6px 10px;
    border-radius: 6px;
    border: 0.1px solid rgb(238 234 234 / 0.13);
  }
`;

// TODO: 이름 변경하기
const NavButtonInner = styled.div`
  @media ${device.tablet} {
    margin: 3px 4px;
    background: rgb(251 247 247 / 60%);
    width: 22px;
    height: 2px;
  }
`;

export default { NavList, NavItem, NavToggleIcon, NavButtonInner, Container };
