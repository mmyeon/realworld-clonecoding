import styled from "styled-components";

const Container = styled.section`
  width: 420px;
  background: green;
  position: relative;

  > .game-image {
    width: 100%;
    border-radius: 10px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default { Container };
