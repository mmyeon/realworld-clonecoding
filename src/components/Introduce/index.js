import React from "react";
import Styled from "../Introduce/index.styles";
import backgroundImage from "../../images/background-graphic.svg";

const Introduce = () => {
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

export default Introduce;
