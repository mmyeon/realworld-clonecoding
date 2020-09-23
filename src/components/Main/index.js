import React from "react";
import Styled from "./index.styles";

const Main = () => {
  return (
    <Styled.MainContainer>
      <Styled.MainContent>
        <Styled.MainTitle>
          <p>리얼월드를 만나면</p>
          <p>
            세상은 <span>거대한 놀이터</span>가 되고
          </p>
          <p>
            우리 모두는 <span>플레이어</span>가 됩니다.
          </p>
        </Styled.MainTitle>
        <Styled.DownloadButtons>
          <a
            href="https://apps.apple.com/kr/app/realworld/id1391415522"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="appStore button"></div>
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=biz.uniquegood.realworld.sunguard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="googlePlay button"></div>
          </a>
        </Styled.DownloadButtons>
      </Styled.MainContent>
    </Styled.MainContainer>
  );
};

export default Main;
