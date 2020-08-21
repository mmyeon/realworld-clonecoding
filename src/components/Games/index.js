import React from "react";
import Styled from "../Games/index.styles";
import motif from "../../images/game-collection/motif-blue.svg";

const index = () => {
  return (
    <Styled.Games>
      <img src={motif} className="motif" alt="game-motif" />
    </Styled.Games>
  );
};

export default index;
