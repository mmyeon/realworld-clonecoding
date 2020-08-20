import styled from "styled-components";
// import { device } from "../../device";
// import backgroundImage from "../../images/background-graphic.svg";

const Container = styled.section`
  width: 100%;
  height: 77vh;
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;

  > .background-graphic {
    position: absolute;
    right: -104px;
    top: 114px;
  }

  > .mockup-image {
    width: 27.2%;
    position: relative;
    top: 172px;
    margin-right: 50px;
  }

  > .text-container {
    width: 27%;
    top: 272px;
    position: relative;

    h1.title {
      font-weight: 400;
      font-size: 2rem;
      line-height: 3rem;
      margin-bottom: 1.5rem;
    }

    > .title-desc {
      font-weight: 500;
      font-size: 1.19rem;
      color: #626262;
      line-height: 28px;
    }

    > .button {
      border-radius: 45px;
      border: 1px solid #c869ff;
      width: 195px;
      height: 34px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 25px;
      font-weight: 800;
      margin-top: 20px;
      font-size: 1.1rem;
      cursor: pointer;
      transition: 0.5s;

      &:hover {
        background: #c869ff;
        color: white;
      }
    }
  }
`;

export default { Container };
