import React from "react";
import Styled from "./index.styles";
import blackAppStore from "../../images/appstore-black.png";
import blackGooglePlay from "../../images/googleplay-black.png";

const Main = () => {
  return (
    <Styled.MainContainer>
      <Styled.MainContent>
        <Styled.MainTitle>
          리얼월드를 만나면
          <br></br>
          세상은 <b>거대한 놀이터</b>가 되고
          <br></br>
          우리 모두는
          <b> 플레이어</b>가 됩니다.
        </Styled.MainTitle>

        <Styled.DownloadButtons>
          <a
            href="https://apps.apple.com/kr/app/realworld/id1391415522"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="app-store button"
              src={blackAppStore}
              width="216px"
              height="70px"
              alt="appstore download"
            />
          </a>

          <a
            href="https://play.google.com/store/apps/details?id=biz.uniquegood.realworld.sunguard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="google-play button"
              src={blackGooglePlay}
              width="216px"
              height="70px"
              alt="google download"
            />
          </a>
        </Styled.DownloadButtons>
      </Styled.MainContent>
    </Styled.MainContainer>
  );
};

export default Main;
