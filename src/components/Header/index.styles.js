import styled, { css } from "styled-components";
import { deviceSize } from "../../device";
import {
  setMaxWidthMediaQuery,
  setMinWidthMediaQuery,
} from "../../styles/functions";

const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  height: 56px;
  overflow: hidden;
  background: ${(props) => (props.isBackgroundWhite ? "#fff" : "#05040469")};
  z-index: 10;
  transition: 0.5s;
  padding: 0.5rem 1rem;

  &.active {
    height: 289px;

    ${setMinWidthMediaQuery(
      css`
        height: 56px;
      `,
      deviceSize.tablet1
    )}
  }

  > .container {
    position: relative;
    max-width: 1090px;
    margin: 0 auto;

    ${setMaxWidthMediaQuery(
      css`
        max-width: 912px;
      `,
      deviceSize.desktop
    )}

    ${setMaxWidthMediaQuery(
      css`
        max-width: 720px;
        margin-left: auto;
        margin-right: auto;
      `,
      deviceSize.tablet0
    )}

    ${setMaxWidthMediaQuery(
      css`
        max-width: 540px;
      `,
      deviceSize.mobile2
    )}

    ${setMaxWidthMediaQuery(
      css`
        max-width: 527px;
      `,
      deviceSize.mobile1
    )}


    > .wrapper {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
`;

const Logo = styled.img`
  width: 170px;
  cursor: pointer;
`;

const NavList = styled.ul`
  display: flex;
  color: ${(props) => (props.isBackgroundWhite ? "#1e112c" : "#fff")};
  z-index: 10;
  margin-right: 7px;

  @media all and (max-width: 767px) {
    max-width: 575px;
  }
  @media all and (max-width: 575px) {
    max-width: 527px;
  }

  ${setMaxWidthMediaQuery(
    css`
      margin: 4px auto;
      left: 0;
      flex-direction: column;
      position: absolute;
      width: 100%;
    `,
    deviceSize.tablet0
  )}

  .nav-item {
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    padding-right: 1rem;
    padding-left: 1rem;
    padding-top: 10px;
    padding-bottom: 10px;

    &:hover {
      background: ${(props) =>
        props.isBackgroundWhite ? "rgba(100, 100, 100, 0.6)" : "#1e112c"};
    }
  }
`;

const ToggleButton = styled.div`
  display: none;
  cursor: pointer;

  ${setMaxWidthMediaQuery(
    css`
      display: block;
      display: flex;
      flex-direction: column;
      padding: 6px 10px;
      border-radius: 6px;
      border: 0.1px solid
        ${(props) =>
          props.isBackgroundWhite
            ? "rgba(0,0,0,.1)"
            : "rgb(238 234 234 / 0.13)"};
    `,
    deviceSize.tablet0
  )}
`;

const ToggleButtonInner = styled.div`
  ${setMaxWidthMediaQuery(
    css`
      margin: 3px 4px;
      background: ${(props) =>
        props.isBackgroundWhite ? "rgba(0,0,0,.5)" : "rgb(251 247 247 / 60%)"};
      width: 22px;
      height: 2px;
      z-index: 10;
    `,
    deviceSize.tablet0
  )}
`;

export default {
  HeaderContainer,
  Logo,
  ToggleButton,
  ToggleButtonInner,
  NavList,
};
