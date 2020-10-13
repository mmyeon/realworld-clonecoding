import styled from "styled-components";

const Container = styled.section`
  position: relative;
  width: 100%;
  overflow: hidden;

  > .background {
    position: absolute;
    background: #fafafa;
    width: 100%;
    height: 590px;
    z-index: -1;
    transform: skewY(10deg) translateY(-177px);
  }

  .content-container {
    margin: 0 auto;
    text-align: center;
    position: relative;
    width: 100%;
    height: 100%;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    padding-bottom: 150px;
    padding-top: 200px;

    @media all and (min-width: 1200px) {
      max-width: 1092px;
    }

    @media all and (max-width: 1199px) {
      max-width: 912px;
    }

    @media all and (max-width: 991px) {
      max-width: 720px;
    }

    @media all and (max-width: 767px) {
      max-width: 540px;
    }

    @media all and (max-width: 575px) {
      max-width: 527px;
    }

    > h1 {
      margin-bottom: 30px;
      font-weight: 500;
      font-size: 2.1em;
      letter-spacing: 1.2px;
      word-break: keep-all;

      > .text-bold {
        font-weight: 700;
      }

      @media all and (max-width: 420px) {
        font-size: 1.6em;
      }
    }

    .video-container {
      position: relative;
      width: 100%;
      padding-bottom: 44.79%;

      > iframe {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
      }

      > img {
        position: absolute;
        z-index: -1;
      }

      .blue-circle {
        width: 30vw;
        bottom: -5vw;
        left: -10vw;
      }
      .zigzag {
        width: 20vw;
        top: -10vw;
        right: -15vw;
      }
    }
  }
`;

export default { Container };
