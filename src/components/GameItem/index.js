import React, { useRef, useEffect } from "react";
import Styled from "./index.styles.js";
// import gameImage from "../../images/game-collection/agent-x.png";
import star from "../../images/game-collection/star.svg";
import gamelist from "../../gamelist.js";

// TODO:useEffect
const GameItem = () => {
  const sectionEl = useRef(null);
  const start = 13;
  //  const minus = -26;
  //  useEffect(() => {
  //    // console.log(sectionEl.current.style.left);
  //    // TODO:기존 스타일에 13%먹이기

  //    console.log(sectionEl.current.style.left);
  //    sectionEl.current.style.left += `${minus}` + "%";
  //    // console.log(sectionEl.current.style.left);
  //    // const timer = setInterval(() => {
  //    // }, 1000);
  //    // return () => clearInterval(timer);
  //  });

  return (
    <Styled.Container ref={sectionEl} style={{ left: `${start}` + "%" }}>
      {gamelist.map((item) => (
        <div className="item">
          <img src={item.image} className="game-image" alt="gameImage" />
          <div className="detail-content">
            <span className="location">{item.location}</span>
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
        </div>
      ))}
    </Styled.Container>
  );
};

export default GameItem;
