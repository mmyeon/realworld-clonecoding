import React from "react";
import Styled from "./index.styles";
import backgroundImage from "../../images/background-graphic.svg";

const Introduction = () => {
  return (
    <Styled.Container>
      <img
        src={backgroundImage}
        className="background-graphic"
        alt="backgroundImage"
      />
    </Styled.Container>
  );
};

export default Introduction;
