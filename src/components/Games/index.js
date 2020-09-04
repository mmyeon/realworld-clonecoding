import React, { useEffect, useRef } from "react";
import Styled from "../Games/index.styles";
import motif from "../../images/game-collection/motif-blue.svg";
import GameItem from "../GameItem/index";
import Button from "../Button";
import gameList from "../../gameList.js";

const Index = () => {
  const visibleImages = [...gameList, ...gameList];
  const slideRef = useRef(null);

  useEffect(() => {
    let start = 0;
    let id = setInterval(() => {
      // TODO: 점점 이미지가 조금 넘어감(넘어가는 속도가 빨라짐 )

      slideRef.current.style.transform = `translate(${(start -= 400)}px)`;
    }, 2500);
    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <Styled.Games>
      <img src={motif} className="motif" alt="game-motif" />
      <h2>
        당신이 주인공이 되는 <b>진짜 세상</b>으로 들어오세요!
      </h2>
      <section className="gamelist" ref={slideRef}>
        {visibleImages.map((item, i) => (
          <GameItem item={item} key={i} />
        ))}
      </section>
      <Button
        top="450px"
        position="relative"
        margin="0 auto"
        width="250px"
        content="전체 게임 보기"
      />
    </Styled.Games>
  );
};

export default Index;
