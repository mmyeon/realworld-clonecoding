import styled from "styled-components";

const Review = styled.section`
  background: #fafafa;
  position: relative;
  overflow: hidden;
  /* TODO: height test */
  height: 690px;

  > .review-content {
    position: relative;
    width: 100%;
    margin: 0 auto;
    padding-top: 80px;

    > .background-image {
      position: absolute;
      top: 53px;
      left: -50px;

      @media all and (max-width: 767px) {
        left: 20px;
      }
    }

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
      font-weight: 500;
      font-size: 33px;
      line-height: 1.5;

      .text-bold {
        font-weight: bold;
      }

      @media all and (max-width: 767px) {
        text-align: center;
        width: 93%;
        margin: 0 auto;
      }

      @media all and (max-width: 420px) {
        font-size: 26px;
        width: 78%;
        word-break: keep-all;
      }
    }
  }
`;

export default { Review };
