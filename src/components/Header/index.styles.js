import styled from "styled-components";
import { device } from "../../device";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  overflow: hidden;
  background: ${(props) => (props.isBackgroundWhite ? "#fff" : "#05040469")};
  z-index: 10;
  transition: 0.5s;

  &.active {
    height: 296px;

    /* TODO: min-width / max-width 통일하기 */
    @media all and (min-width: 991px) {
      height: 56px;
    }
  }

  > .container {
    position: relative;
    max-width: 1140px;
    margin: 6.5px auto;
    padding: 0 15px;

    @media all and (max-width: 1199px) {
      max-width: 954px;
    }

    @media all and (max-width: 991px) {
      height: 56px;
      max-width: 755px;
      margin: 9px auto;
    }

    @media all and (max-width: 767px) {
      max-width: 575px;
    }

    > .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;

const Logo = styled.img`
  width: 170px;
  padding-left: 10px;
  cursor: pointer;

  @media ${device.tablet} {
    max-width: 954px;
  }
`;

const NavList = styled.ul`
  display: flex;
  color: ${(props) => (props.isBackgroundWhite ? "#1e112c" : "#fff")};
  z-index: 10;
  margin-right: 7px;

  @media all and (max-width: 767px) {
    max-width: 575px;
  }

  @media ${device.tablet} {
    margin: 9px auto;
    max-width: 755px;
    left: 0;
    top: 40.5px;
    margin-top: 5px;
    flex-direction: column;
    padding: 0 15px;
    position: absolute;
    width: 100%;
  }

  .nav-item {
    padding: 10.5px;
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;

    @media ${device.tablet} {
      margin-left: 10px;
    }

    &:hover {
      background: ${(props) =>
        props.isBackgroundWhite ? "rgba(100, 100, 100, 0.6)" : "#1e112c"};
    }
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

export default {
  HeaderContainer,
  Logo,
  ToggleButton,
  ToggleButtonInner,
  NavList,
};
