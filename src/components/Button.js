import React from "react";
import styled from "styled-components";

const ButtonStyle = styled.div`
  border-radius: 45px;
  border: 1px solid #c869ff;
  /* width: 195px; */
  width: ${(props) => props.width || "195px"};
  height: 34px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${(props) => props.padding || "25px"};
  font-weight: 800;
  margin-top: 20px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: 0.5s;
  margin: ${(props) => props.margin};
  top: ${(props) => props.top};
  position: ${(props) => props.position};

  &:hover {
    background: #c869ff;
    color: white;
  }
`;

const Button = ({ content, top, position, margin, width }) => {
  return (
    <ButtonStyle top={top} position={position} margin={margin} width={width}>
      {content}
    </ButtonStyle>
  );
};

export default Button;
