import React from "react";
import Styled from "../Games/index.styles";
import motif from "../../images/game-collection/motif-blue.svg";

const index = () => {
  return (
    <Styled.Games>
      <img src={motif} className="motif" alt="game-motif" />
      <h2>
        당신이 주인공이 되는 <b>진짜 세상</b>으로 들어오세요!
      </h2>
    </Styled.Games>
  );
};

export default index;
