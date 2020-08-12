import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/main-image.jpg";
import BlackappStore from "../images/appstore-black.png";
import BlackgooglePlay from "../images/googleplay-black.png";
import WhiteappStore from "../images/appstore-white.png";
import WhitegooglePlay from "../images/googleplay-white.png";

import { device } from "../device";

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
    background-image: url(${WhitegooglePlay});
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

const Main = () => {
  return (
    <MainContainer>
      <MainContent>
        <MainTitle>
          <p>리얼월드를 만나면</p>
          <p>
            세상은 <b>거대한 놀이터</b>가 되고
          </p>
          <p>
            우리 모두는 <b>플레이어</b>가 됩니다.
          </p>
        </MainTitle>
        <DownloadButtons>
          {/* {`${device.tabletSize}` ? (
            <Button src={WhiteappStore} />
          ) : (
            <Button src={BlackappStore} />
          )} */}

          <div className="button"></div>
        </DownloadButtons>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
