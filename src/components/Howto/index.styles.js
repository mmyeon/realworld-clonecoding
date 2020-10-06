import styled from "styled-components";

const Howto = styled.section`
  position: relative;
  margin: 0 auto;
  text-align: center;
  padding: 110px 0;
  overflow: hidden;
  height: 100%;

  > .background-image {
    position: absolute;
    right: -180px;
    top: -230px;
    z-index: -1;
    width: 670px;
  }

  > .howto-content {
    margin: 0 auto;

    @media all and (min-width: 991px) {
      max-width: 912px;
    }

    @media all and (min-width: 1200px) {
      max-width: 1092px;
    }

    @media all and (max-width: 990px) {
      max-width: 672px;
    }

    @media all and (max-width: 767px) {
      max-width: 540px;
    }

    .main-title {
      font-weight: 500;
      font-size: 2.1rem;

      > .bold {
        font-weight: 800;
      }

      @media all and (max-width: 420px) {
        font-size: 25px;
      }
    }

    .howto-container {
      display: flex;
      justify-content: center;
      align-items: baseline;
      padding: 0 10px;

      @media all and (max-width: 767px) {
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

const Step = styled.div`
  > img {
    width: 88%;
    margin-top: 40px;

    @media all and (max-width: 767px) {
      width: 100%;
      margin-top: 50px;
    }

    @media all and (max-width: 575px) {
      width: 88%;
      margin-top: 40px;
    }

    @media all and (max-width: 420px) {
      width: 60%;
    }
  }

  > p {
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 20px;
    line-height: 26px;
    word-break: keep-all;
    padding: 0 40px;

    @media all and (max-width: 767px) {
      word-break: normal;
      padding: 0 0px;
    }

    @media all and (max-width: 420px) {
      word-break: keep-all;
      padding: 0 40px;
    }
  }
`;

export default { Howto, Step };
