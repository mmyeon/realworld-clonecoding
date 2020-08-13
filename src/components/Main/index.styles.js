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
  background-image:url("${backgroundImage}");
  background-size:cover;
  display:flex;
  flex-direction:column;
  justify-content: center;

`;

const MainContent = styled.div`
  width: 80%;
  margin: 0 auto;

  @media ${device.mobileL} {
    width: 40%;
    color: white;
    font-weight: 800;
  }
`;

const MainTitle = styled.div`
  font-size: 2.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 61px;

  @media ${device.mobileL} {
    color: white;
    font-weight: 800;
  }
`;

const DownloadButtons = styled.div`
  margin-top: 40px;

  > .button {
    background-image: url(${whiteGooglePlay});
    /* background-image: url("../images/appstore-white.png"); */
    width: 100px;
    height: 50px;
    background-position: center;
    background-size: contain;
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
