import React from "react";
import Styled from "../Games/index.styles";
import motif from "../../images/game-collection/motif-blue.svg";
import GameItem from "../GameItem/index";
import Button from "../Button";
import gamelist from "../../gamelist.js";

const index = () => {
  return (
    <Styled.Games>
      <img src={motif} className="motif" alt="game-motif" />
      <h2>
        당신이 주인공이 되는 <b>진짜 세상</b>으로 들어오세요!
      </h2>
      {/* TODO: gamelist가 left 이동하기*/}
      <section className="gamelist">
        {gamelist.map((item) => (
          <>
            <GameItem item={item} key={item.id} />
          </>
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

export default index;
