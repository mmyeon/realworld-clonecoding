import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ButtonStyle = styled.a`
  border-radius: 45px;
  border: 1px solid #c869ff;
  font-weight: 800;
  font-size: 17px;
  cursor: pointer;
  transition: 0.5s;
  display: inline-block;

  top: ${(props) => props.top};
  position: ${(props) => props.position};
  margin: ${(props) => props.margin || "0 auto"};
  padding: ${(props) => props.padding || "12px 80px"};
  margin-top: ${(props) => props.marginTop};

  &:hover {
    background: #c869ff;
    color: #fff;
  }
`;

const Button = ({
  content,
  href,
  top,
  position,
  padding,
  margin,
  marginTop,
}) => {
  return (
    <Container>
      <ButtonStyle
        href={href}
        top={top}
        position={position}
        padding={padding}
        margin={margin}
        marginTop={marginTop}
      >
        {content}
      </ButtonStyle>
    </Container>
  );
};

export default Button;
