import styled, { css } from "styled-components";
import backgroundImage from "../../images/main-image.jpg";
import mainPortrait from "../../images/main_portrait.jpg";
import whiteAppStore from "../../images/appstore-white.png";
import whiteGooglePlay from "../../images/googleplay-white.png";
import { deviceSize } from "../../device";
import { setMaxWidthMediaQuery } from "../../styles/functions";

const MainContainer = styled.section`
  width: 100%;
  height: 100vh;
  background-image: url("${backgroundImage}");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${setMaxWidthMediaQuery(
    css`
      background-image: url("${mainPortrait}");
    `,
    deviceSize.mobile2
  )}
`;

const MainContent = styled.div`
  max-width: 1090px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  ${setMaxWidthMediaQuery(
    css`
      max-width: 912px;
    `,
    deviceSize.desktop
  )};

  ${setMaxWidthMediaQuery(
    css`
      max-width: 720px;
    `,
    deviceSize.tablet0
  )};

  ${setMaxWidthMediaQuery(
    css`
      max-width: 540px;
      color: white;
      text-shadow: 1px 1px 2px grey;
      font-weight: 700;
    `,
    deviceSize.mobile2
  )};
`;

const MainTitle = styled.h1`
  font-size: 2.6rem;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 1.1px;
  margin-bottom: 40px;
  word-break: keep-all;

  ${setMaxWidthMediaQuery(
    css`
      max-width: 527px;
      font-size: 1.5rem;
      line-height: 33px;
      text-align: center;
    `,
    deviceSize.mobile1
  )};

  > b {
    font-weight: bolder;
  }
`;

const DownloadButtons = styled.div`
  margin: 0 auto;
  display: flex;

  @media all and (max-width: 575px) {
    justify-content: center;
    width: 100%;
  }

  a:first-child {
    margin-right: 15px;
  }

  .button {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  .app-store {
    ${setMaxWidthMediaQuery(
      css`
        content: url(${whiteAppStore});
      `,
      deviceSize.mobile2
    )};
  }

  .google-play {
    ${setMaxWidthMediaQuery(
      css`
        content: url(${whiteGooglePlay});
      `,
      deviceSize.mobile2
    )};
  }
`;

export default {
  MainContainer,
  MainContent,
  MainTitle,
  DownloadButtons,
};
// Button
