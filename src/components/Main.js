import React from "react";
import styled from "styled-components";
import backgroundImage from "../images/main-image.jpg";
import appStore from "../images/appstore-black.png";
import googlePlay from "../images/googleplay-black.png";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-image:url("${backgroundImage}");
  background-size:cover;
  display:flex;
  flex-direction:column;
  justify-content: center;
  /* text-align:center; */
`;

const MainContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const MainTitle = styled.div`
  font-size: 2.7rem;
  font-weight: 500;
  letter-spacing: 1px;
  line-height: 61px;
`;

const DownloadButtons = styled.div`
  margin-top: 40px;
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
          <Button src={appStore} />
          <Button src={googlePlay} />
        </DownloadButtons>
      </MainContent>
    </MainContainer>
  );
};

export default Main;
