import React from "react";
import Styled from "./index.styles";

const Main = () => {
  return (
    <Styled.MainContainer>
      <Styled.MainContent>
        <Styled.MainTitle>
          <p>리얼월드를 만나면</p>
          <p>
            세상은 <b>거대한 놀이터</b>가 되고
          </p>
          <p>
            우리 모두는 <b>플레이어</b>가 됩니다.
          </p>
        </Styled.MainTitle>
        <Styled.DownloadButtons>
          <div className="appStore button"></div>
          <div className="googlePlay button"></div>
        </Styled.DownloadButtons>
      </Styled.MainContent>
    </Styled.MainContainer>
  );
};

export default Main;
