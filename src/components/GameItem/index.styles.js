import styled from "styled-components";

const Container = styled.section`
  display: flex;
  position: absolute;
  /* left: 13%; */
  transition: 0.5s;

  > .item {
    width: 420px;
    position: relative;
    margin-right: 20px;

    > .game-image {
      width: 100%;
      height: 280px;
      border-radius: 10px;
      top: 0;
      left: 0;
    }

    > .detail-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 15px;

      > .location {
        color: #626262;
        font-weight: 500;
        font-size: 16px;
      }
    }

    > h3 {
      font-size: 1.8rem;
      font-weight: 500;
      margin-bottom: 12px;
    }

    > p {
      color: #626262;
      font-weight: 500;
      font-size: 16px;
    }
  }
`;

export default { Container };
