import React from "react";
import Styled from "./index.styles.js";
import gameImage from "../../images/game-collection/agent-x.png";
import star from "../../images/game-collection/star.svg";

const index = () => {
  return (
    <Styled.Container>
      <div className="item">
        <img src={gameImage} className="game-image" alt="gameImage" />
        <div className="detail-content">
          <span className="location">서울숲 일대</span>
          <div className="star-rating">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <h3>AGENT X</h3>
        <p>암흑조직의 음모를 막아라!</p>
      </div>
      <div className="item">
        <img src={gameImage} className="game-image" alt="gameImage" />
        <div className="detail-content">
          <span className="location">서울숲 일대</span>
          <div className="star-rating">
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
            <img src={star} alt="star" />
          </div>
        </div>
        <h3>AGENT X</h3>
        <p>암흑조직의 음모를 막아라!</p>
      </div>
    </Styled.Container>
  );
};

export default index;
