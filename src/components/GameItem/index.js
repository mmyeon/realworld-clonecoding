import React from "react";
import Styled from "./index.styles.js";
import gameImage from "../../images/game-collection/agent-x.png";

const index = () => {
  return (
    <Styled.Container>
      <img src={gameImage} className="game-image" alt="gameImage" />
    </Styled.Container>
  );
};

export default index;
