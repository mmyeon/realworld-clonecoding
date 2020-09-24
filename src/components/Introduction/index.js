import React from "react";
import Styled from "./index.styles";
import backgroundImage from "../../images/background-graphic.svg";
import mockupImage from "../../images/mockup-mainpage.png";

const Introduction = () => {
  return (
    <Styled.Container>
      <img
        src={backgroundImage}
        className="background-graphic"
        alt="backgroundImage"
      />
      <div className="content-container">
        <div className="img-container">
          <img
            src={mockupImage}
            className="mockup-image"
            alt="mockup-mainpage"
          />
        </div>
        <div className="text-container">
          <h1 className="title">
            <span className="text-bold">야외에서 즐기는 게임</span>부터
            <br></br>간단한 모바일 게임까지
          </h1>
          <p className="title-desc">
            리얼월드는 경험형 놀이콘텐츠를 통해 <br></br> 놀이-여가문화의 새로운
            방식을 <span>만들어나갑니다.</span>
          </p>
          <a href="https://realworld.to/about" className="button">
            리얼월드 소개 보기
          </a>
        </div>
      </div>
    </Styled.Container>
  );
};

export default Introduction;
