import React from "react";
import Styled from "./index.styles";
import blackAppStore from "../../images/appstore-black.png";
import blackGooglePlay from "../../images/googleplay-black.png";

const Main = () => {
  return (
    <Styled.MainContainer>
      <Styled.MainContent>
        <Styled.MainTitle>
          {/* TODO: h1으로 바꾸면 SEO유리 */}
          <p>리얼월드를 만나면</p>
          <p>
            세상은 <span>거대한 놀이터</span>가 되고
          </p>
          <p className="tablet-align">
            우리 모두는 <span>플레이어</span>가 됩니다.
          </p>
        </Styled.MainTitle>

        <Styled.DownloadButtons>
          <a
            href="https://apps.apple.com/kr/app/realworld/id1391415522"
            target="_blank"
            rel="noopener noreferrer"
          >
            {/* TODO: css를 위한 class이름은 kebab case로 */}
            <img
              className="appStore button"
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
              className="googlePlay button"
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
