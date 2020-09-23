import styled from "styled-components";
import backgroundImage from "../../images/main-image.jpg";
import blackAppStore from "../../images/appstore-black.png";
import blackGooglePlay from "../../images/googleplay-black.png";
import whiteAppStore from "../../images/appstore-white.png";
import whiteGooglePlay from "../../images/googleplay-white.png";
import { device } from "../../device";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("${backgroundImage}");
  background-size: cover;
  background-position: center right;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const MainContent = styled.div`
  max-width: 1090px;
  width: 100%;
  margin: 0 auto;

  @media all and (max-width: 1199px) {
    max-width: 954px;
  }

  @media all and (max-width: 991px) {
    max-width: 755px;
  }

  @media all and (max-width: 767px) {
    max-width: 575px;
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

  span {
    font-weight: 800;

  @media ${device.mobileL} {
    color: white;
    font-weight: 800;
  }
`;

const DownloadButtons = styled.div`
  margin-top: 40px;
  display: flex;

  > a {
    .button {
      width: 216px;
      height: 70px;
      cursor: pointer;
    }

    .appStore {
      background-image: url(${blackAppStore});
      margin-right: 19px;

      @media ${device.mobileL} {
        background-image: url(${whiteAppStore});
      }
    }

    .googlePlay {
      background-image: url(${blackGooglePlay});

      @media ${device.mobileL} {
        background-image: url(${whiteGooglePlay});
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
