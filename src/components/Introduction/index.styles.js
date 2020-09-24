import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 720px;
  position: relative;
  overflow: hidden;

  @media all and (max-width: 767px) {
    height: 920px;
  }

  > .background-graphic {
    position: absolute;
    right: -104px;
    top: 114px;
    z-index: -1;

    @media all and (max-width: 990px) {
      right: -29%;
      top: 50px;
    }

    @media all and (max-width: 767px) {
      right: -39%;
      top: 34%;
    }

    @media all and (max-width: 575px) {
      right: -53%;
      top: -28%;
    }
  }

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    padding: 0px 25px;
    width: 100%;
    height: 100%;

    @media all and (max-width: 1199px) {
      max-width: 912px;
    }

    @media all and (max-width: 991px) {
      max-width: 720px;
    }

    @media all and (max-width: 767px) {
      max-width: 540px;
      flex-direction: column;
      padding-bottom: 40px;
    }

    @media all and (max-width: 420px) {
      padding-bottom: 80px;
    }

    .img-container {
      @media all and (max-width: 991px) {
        margin-right: 40px;
      }

      @media all and (max-width: 767px) {
        height: 590px;
        width: 100%;
        text-align: center;
        overflow: hidden;
        position: relative;
        margin: 0 auto;
      }

      > .mockup-image {
        max-width: 373px;
        width: 100%;
        position: relative;
        margin-right: 45px;
        bottom: -164px;

        @media all and (max-width: 991px) {
          bottom: -106px;
        }

        @media all and (max-width: 767px) {
          margin: 0 auto;
          padding: 0 20px;
        }
      }
    }

    > .text-container {
      @media all and (max-width: 767px) {
        text-align: center;
      }

      h1.title {
        font-weight: 500;
        font-size: 2.1rem;
        line-height: 3rem;
        margin-bottom: 1.2rem;

        @media all and (max-width: 991px) {
          word-break: keep-all;
          /* width: 72%; */
        }

        @media all and (max-width: 767px) {
          width: 100%;
        }

        @media all and (max-width: 420px) {
          line-height: 1.5;
          font-size: 25px;
        }

        .text-bold {
          font-weight: 700;
        }
      }

      > .title-desc {
        font-weight: 500;
        font-size: 1.19rem;
        color: #626262;
        line-height: 28px;
        margin-bottom: 20px;
        word-break: keep-all;
      }

      > .button {
        border-radius: 45px;
        border: 1px solid #c869ff;
        display: inline-block;
        margin: 0 auto;
        padding: 11px 31px;
        font-weight: 800;
        font-size: 17px;
        cursor: pointer;
        transition: 0.5s;

        &:hover {
          background: #c869ff;
          color: white;
        }
      }
    }
  }
`;

export default { Container };
