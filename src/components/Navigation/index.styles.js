import styled from "styled-components";
import { device } from "../../device";

const NavList = styled.ul`
  display: flex;
  color: ${(props) => (props.isBackgroundWhite ? "#1e112c" : "#fff")};
  z-index: 10;
  margin-right: 7px;

  @media all and (max-width: 991px) {
    max-width: 755px;
  }

  @media all and (max-width: 767px) {
    max-width: 575px;
  }

  @media ${device.tablet} {
    left: 0;
    top: 55.5px;
    flex-direction: column;
    padding: 0 80px;
    padding-bottom: 8px;
    position: absolute;
    width: 100%;
    margin: 0 15px;
    /* background: ${(props) =>
      props.isBackgroundWhite ? "#fff" : "#05040469"}; */
  }

  .nav-item {
    /* padding: 12.5px; */
    padding: 10.5px 7px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;

    &:hover {
      background: ${(props) =>
        props.isBackgroundWhite ? "rgba(100, 100, 100, 0.6)" : "#1e112c"};
    }

    /* @media all and (max-width: 991px) {
      max-width: 755px;
    }

    @media all and (max-width: 767px) {
      max-width: 575px;
    } */
  }
`;

const ToggleButton = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
    display: flex;
    flex-direction: column;
    padding: 6px 10px;
    border-radius: 6px;
    border: 0.1px solid
      ${(props) =>
        props.isBackgroundWhite ? "rgba(0,0,0,.1)" : "rgb(238 234 234 / 0.13)"};
  }
`;

// TODO: 이름 변경하기
const ToggleButtonInner = styled.div`
  @media ${device.tablet} {
    margin: 3px 4px;
    background: ${(props) =>
      props.isBackgroundWhite ? "rgba(0,0,0,.5)" : "rgb(251 247 247 / 60%)"};
    width: 22px;
    height: 2px;
    z-index: 10;
  }
`;

export default { ToggleButton, ToggleButtonInner, NavList };
