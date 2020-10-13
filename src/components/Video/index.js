import React from "react";
import Styled from "./index.styles";
import motifBlue from "../../images/video/motif-blue.svg";
import motifPpl from "../../images/video/motif-ppl.svg";

const index = () => {
  return (
    <Styled.Container>
      <div className="background"></div>
      <div className="content-container">
        <h1>
          세상은 <span className="text-bold">거대한 놀이터</span>이고, 우리
          모두는
          <span className="text-bold"> 플레이어</span>다.
        </h1>

        <div className="video-container">
          <iframe
            src="https://www.youtube-nocookie.com/embed/7IRvS6UEMLg?controls=0"
            title="realworld"
            frameBorder="0"
          ></iframe>
          <img src={motifBlue} className="blue-circle" alt="blue-circle" />
          <img src={motifPpl} className="zigzag" alt="zigzag" />
        </div>
      </div>
    </Styled.Container>
  );
};

export default index;
