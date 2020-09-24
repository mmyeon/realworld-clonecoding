import styled from "styled-components";

const Container = styled.section`
  width: 100%;
  height: 720px;
  position: relative;
  overflow: hidden;

  > .background-graphic {
    position: absolute;
    right: -104px;
    top: 114px;
  }

  @media all and (max-width: 767px) {
    height: 920px;
  }

  .content-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 92%;

    @media all and (max-width: 1199px) {
      max-width: 912px;
    }

    @media all and (max-width: 991px) {
      max-width: 720px;
    }

    @media all and (max-width: 767px) {
      max-width: 540px;
    }

    /* @media all and (max-width: 575px) {
      max-width: 527px;
    } */

    > .mockup-image {
      max-width: 373px;
      position: relative;
      top: 148px;
      margin-right: 45px;
    }

    > .text-container {
      z-index: 5;

      h1.title {
        font-weight: 500;
        font-size: 2.1rem;
        line-height: 3rem;
        margin-bottom: 1.2rem;
      }

      > .title-desc {
        font-weight: 500;
        font-size: 1.19rem;
        color: #626262;
        line-height: 28px;
        margin-bottom: 20px;
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
