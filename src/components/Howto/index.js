import React from "react";
import Styled from "./index.styles";
import backgroundImage from "../../images/how-to/background-graphic-2.svg";
import howto1 from "../../images/how-to/howto-1.svg";
import howto2 from "../../images/how-to/howto-2.svg";
import howto3 from "../../images/how-to/howto-3.svg";

const index = () => {
  return (
    <Styled.Howto>
      <img
        className="background-image"
        src={backgroundImage}
        alt="background line"
      />

      <div className="howto-content">
        <h1 className="main-title">
          <span className="bold">리얼월드</span>를 즐기고 싶다면?
        </h1>

        <div className="howto-container">
          <Styled.Step>
            <img src={howto1} alt="step one" />
            <p>리얼월드 앱을 다운로드받으세요</p>
          </Styled.Step>
          <Styled.Step>
            <img src={howto2} alt="step two" />
            <p>원하는 게임을 선택하세요</p>
          </Styled.Step>
          <Styled.Step>
            <img src={howto3} alt="step three" />
            <p>게임의 주인공이 되어 미션을 해결하세요!</p>
          </Styled.Step>
        </div>
      </div>
    </Styled.Howto>
  );
};

export default index;
