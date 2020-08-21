import React from "react";
import Styled from "../Games/index.styles";
import motif from "../../images/game-collection/motif-blue.svg";
import GameItem from "../GameItem/index";

const index = () => {
  return (
    <Styled.Games>
      <img src={motif} className="motif" alt="game-motif" />
      <h2>
        당신이 주인공이 되는 <b>진짜 세상</b>으로 들어오세요!
      </h2>
      <div className="gamelist">
        <GameItem />
      </div>
    </Styled.Games>
  );
};

export default index;
