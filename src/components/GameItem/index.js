import React, { useState, useEffect } from "react";
// import React from "react";
import Styled from "./index.styles.js";
// import gameImage from "../../images/game-collection/agent-x.png";
import star from "../../images/game-collection/star.svg";

const GameItem = ({ item }) => {
  // let slideContainerStyle = {
  //   left: `(-100 * current)px`,
  // };

  return (
    // TODO:item.id가 6이면 다시 map돌리기
    <Styled.Container className="item" key={item.id}>
      {console.log(item.id)}
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
      {/* // {item.id === 6 ? console.log("okay") : console.log("nope")} */}
    </Styled.Container>
  );
};

export default GameItem;
