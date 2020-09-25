import styled, { css } from "styled-components";
import backgroundImage from "../../images/main-image.jpg";
import mainPortrait from "../../images/main_portrait.jpg";
import whiteAppStore from "../../images/appstore-white.png";
import whiteGooglePlay from "../../images/googleplay-white.png";
import { device } from "../../device";
import { mobile } from "../../styles/functions";

const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("${backgroundImage}");
  background-size: cover;
  background-position: center right;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media all and (max-width: 767px) {
    background-image: url("${mainPortrait}");
  }
`;

const MainContent = styled.div`
  max-width: 1090px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  @media all and (max-width: 1199px) {
    max-width: 912px;
  }

  @media all and (max-width: 991px) {
    max-width: 720px;
    left: 20px;
  }
  @media all and (max-width: 767px) {
    max-width: 540px;
    text-shadow: 1px 1px 2px grey;
  }

  @media all and (max-width: 575px) {
    max-width: 527px;
    left: 0;
  }

  @media ${device.mobileL} {
    color: white;
    font-weight: 800;
  }
`;

const MainTitle = styled.div`
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 60px;
  letter-spacing: 1.1px;
  margin-bottom: 40px;

  span {
    font-weight: 800;
  }

  @media ${device.mobileL} {
    color: white;
    font-weight: 700;
  }

  @media all and (max-width: 575px) {
    max-width: 527px;
    font-size: 1.5rem;
    line-height: 33px;
    text-align: center;
    color: red;
  }

  /* ${mobile(
    "xs",
    css`
      max-width: 527px;
      font-size: 1.5rem;
      line-height: 33px;
      text-align: center;
      color: blue;
    `
  )} */

  @media all and (max-width: 362px) {
    width: 75%;
    margin: 0 auto;
    margin-bottom: 40px;
  }

  .tablet-align {
    @media all and (max-width: 767px) {
      width: 75%;
    }
    @media all and (max-width: 575px) {
      width: 100%;
    }
  }
`;

const DownloadButtons = styled.div`
  margin: 0 auto;
  display: flex;

  @media all and (max-width: 575px) {
    justify-content: center;
    width: 100%;
    padding: 0 20px;
  }

  > a {
    .button {
      width: 100%;
      max-width: 216px;
      height: auto;
      cursor: pointer;

      /* &.appStore {
      } */
    }

    .appStore {
      padding-right: 4px;

      @media ${device.mobileL} {
        content: url(${whiteAppStore});
      }
    }

    .googlePlay {
      padding-left: 4px;

      @media ${device.mobileL} {
        content: url(${whiteGooglePlay});
      }
    }
  }
`;

const Button = styled.img`
  cursor: pointer;

  &:first-child {
    margin-right: 20px;
  }
`;

export default {
  MainContainer,
  MainContent,
  MainTitle,
  DownloadButtons,
  Button,
};
