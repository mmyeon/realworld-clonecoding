import React from "react";
import Styled from "./index.styles.js";
import Rating from "../Rating";

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
        <Rating />
      </div>

      <h3>{item.title}</h3>
      <p>{item.titleDetail}</p>
    </Styled.Container>
  );
};

export default GameItem;
