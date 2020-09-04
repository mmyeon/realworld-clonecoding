import React from "react";
import Styled from "./index.styles.js";
import star from "../../images/game-collection/star.svg";

const GameItem = ({ item }) => {
  return (
    <Styled.Container className="item">
      <img src={item.image} className="game-image" alt="gameImage" />
      <div className="detail-content">
        {item.location.length > 20 ? (
          <span className="location">{item.location.slice(0, 24)}</span>
        ) : (
          <span className="location">{item.location}</span>
        )}
        <div className="star-rating">
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
          <img src={star} alt="star" />
        </div>
      </div>
      <h3>{item.title}</h3>
      <p>{item.titleDetail}</p>
    </Styled.Container>
  );
};

export default GameItem;
